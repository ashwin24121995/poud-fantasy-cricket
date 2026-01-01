import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import { COOKIE_NAME } from "../shared/const";
import type { TrpcContext } from "./_core/context";

type CookieCall = {
  name: string;
  options: Record<string, unknown>;
};

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(role: "user" | "admin" = "user"): { ctx: TrpcContext; clearedCookies: CookieCall[] } {
  const clearedCookies: CookieCall[] = [];

  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    username: "testuser",
    phoneNumber: null,
    state: null,
    language: "en",
    loginMethod: "manus",
    role,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: (name: string, options: Record<string, unknown>) => {
        clearedCookies.push({ name, options });
      },
    } as TrpcContext["res"],
  };

  return { ctx, clearedCookies };
}

function createPublicContext(): TrpcContext {
  return {
    user: undefined,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("auth.me", () => {
  it("returns user when authenticated", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.me();

    expect(result).toBeDefined();
    expect(result?.id).toBe(1);
    expect(result?.email).toBe("test@example.com");
  });

  it("returns undefined when not authenticated", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.me();

    expect(result).toBeUndefined();
  });
});

describe("auth.logout", () => {
  it("clears the session cookie and reports success", async () => {
    const { ctx, clearedCookies } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.logout();

    expect(result).toEqual({ success: true });
    expect(clearedCookies).toHaveLength(1);
    expect(clearedCookies[0]?.name).toBe(COOKIE_NAME);
    expect(clearedCookies[0]?.options).toMatchObject({
      maxAge: -1,
      secure: true,
      sameSite: "none",
      httpOnly: true,
      path: "/",
    });
  });
});

describe("auth.updateProfile", () => {
  it("allows authenticated user to update profile", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.updateProfile({
      username: "newusername",
      state: "Maharashtra",
      language: "hi",
    });

    expect(result).toEqual({ success: true });
  });

  it("throws error when not authenticated", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.auth.updateProfile({
        username: "newusername",
      })
    ).rejects.toThrow();
  });
});

describe("matches.upcoming", () => {
  it("returns upcoming matches for public users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.matches.upcoming({ limit: 10 });

    expect(Array.isArray(result)).toBe(true);
  });

  it("respects limit parameter", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.matches.upcoming({ limit: 5 });

    expect(result.length).toBeLessThanOrEqual(5);
  });
});

describe("matches.live", () => {
  it("returns live matches for public users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.matches.live();

    expect(Array.isArray(result)).toBe(true);
  });
});

describe("teams.myTeams", () => {
  it("returns user teams when authenticated", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.teams.myTeams();

    expect(Array.isArray(result)).toBe(true);
  });

  it("throws error when not authenticated", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.teams.myTeams()).rejects.toThrow();
  });
});

describe("admin.users", () => {
  it("allows admin to view users", async () => {
    const { ctx } = createAuthContext("admin");
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.users({ limit: 50 });

    expect(Array.isArray(result)).toBe(true);
  });

  it("throws error when non-admin tries to access", async () => {
    const { ctx } = createAuthContext("user");
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.users({ limit: 50 })).rejects.toThrow("Admin access required");
  });

  it("throws error when not authenticated", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.users({ limit: 50 })).rejects.toThrow();
  });
});

describe("admin.matches", () => {
  it("allows admin to view all matches", async () => {
    const { ctx } = createAuthContext("admin");
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.matches();

    expect(Array.isArray(result)).toBe(true);
  });

  it("throws error when non-admin tries to access", async () => {
    const { ctx } = createAuthContext("user");
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.matches()).rejects.toThrow("Admin access required");
  });
});

describe("admin.players", () => {
  it("allows admin to view all players", async () => {
    const { ctx } = createAuthContext("admin");
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.players();

    expect(Array.isArray(result)).toBe(true);
  });

  it("throws error when non-admin tries to access", async () => {
    const { ctx } = createAuthContext("user");
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.players()).rejects.toThrow("Admin access required");
  });
});
