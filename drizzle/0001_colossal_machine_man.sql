CREATE TABLE `contest_entries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contestId` int NOT NULL,
	`fantasyTeamId` int NOT NULL,
	`userId` int NOT NULL,
	`finalPoints` decimal(10,2) DEFAULT '0.0',
	`finalRank` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contest_entries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`matchId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`contestType` enum('public','private','head_to_head') NOT NULL DEFAULT 'public',
	`maxParticipants` int DEFAULT 100,
	`currentParticipants` int DEFAULT 0,
	`status` enum('open','full','live','completed') NOT NULL DEFAULT 'open',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `fantasy_team_players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fantasyTeamId` int NOT NULL,
	`playerId` int NOT NULL,
	`isCaptain` boolean DEFAULT false,
	`isViceCaptain` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `fantasy_team_players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `fantasy_teams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`matchId` int NOT NULL,
	`contestId` int,
	`teamName` varchar(255) NOT NULL,
	`captainId` int NOT NULL,
	`viceCaptainId` int NOT NULL,
	`totalPoints` decimal(10,2) DEFAULT '0.0',
	`rank` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `fantasy_teams_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `match_players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`matchId` int NOT NULL,
	`playerId` int NOT NULL,
	`runs` int DEFAULT 0,
	`ballsFaced` int DEFAULT 0,
	`fours` int DEFAULT 0,
	`sixes` int DEFAULT 0,
	`strikeRate` decimal(6,2),
	`wickets` int DEFAULT 0,
	`oversBowled` decimal(4,1) DEFAULT '0.0',
	`runsConceded` int DEFAULT 0,
	`maidens` int DEFAULT 0,
	`economyRate` decimal(5,2),
	`catches` int DEFAULT 0,
	`stumpings` int DEFAULT 0,
	`runOuts` int DEFAULT 0,
	`pointsEarned` decimal(10,2) DEFAULT '0.0',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `match_players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `matches` (
	`id` int AUTO_INCREMENT NOT NULL,
	`externalMatchId` varchar(100),
	`title` varchar(255) NOT NULL,
	`team1` varchar(100) NOT NULL,
	`team2` varchar(100) NOT NULL,
	`team1Logo` text,
	`team2Logo` text,
	`venue` varchar(255),
	`matchType` enum('T20','ODI','Test','T10') NOT NULL,
	`status` enum('upcoming','live','completed','cancelled') NOT NULL DEFAULT 'upcoming',
	`startTime` timestamp NOT NULL,
	`endTime` timestamp,
	`result` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `matches_id` PRIMARY KEY(`id`),
	CONSTRAINT `matches_externalMatchId_unique` UNIQUE(`externalMatchId`)
);
--> statement-breakpoint
CREATE TABLE `platform_config` (
	`id` int AUTO_INCREMENT NOT NULL,
	`configKey` varchar(100) NOT NULL,
	`configValue` text,
	`description` text,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `platform_config_id` PRIMARY KEY(`id`),
	CONSTRAINT `platform_config_configKey_unique` UNIQUE(`configKey`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`externalPlayerId` varchar(100),
	`name` varchar(255) NOT NULL,
	`role` enum('batsman','bowler','allrounder','wicketkeeper') NOT NULL,
	`team` varchar(100) NOT NULL,
	`photo` text,
	`fantasyPoints` decimal(10,2) DEFAULT '8.0',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `players_id` PRIMARY KEY(`id`),
	CONSTRAINT `players_externalPlayerId_unique` UNIQUE(`externalPlayerId`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD `username` varchar(100);--> statement-breakpoint
ALTER TABLE `users` ADD `phoneNumber` varchar(20);--> statement-breakpoint
ALTER TABLE `users` ADD `state` varchar(100);--> statement-breakpoint
ALTER TABLE `users` ADD `language` enum('en','hi') DEFAULT 'en';--> statement-breakpoint
ALTER TABLE `users` ADD `ageVerified` boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_username_unique` UNIQUE(`username`);--> statement-breakpoint
ALTER TABLE `contest_entries` ADD CONSTRAINT `contest_entries_contestId_contests_id_fk` FOREIGN KEY (`contestId`) REFERENCES `contests`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `contest_entries` ADD CONSTRAINT `contest_entries_fantasyTeamId_fantasy_teams_id_fk` FOREIGN KEY (`fantasyTeamId`) REFERENCES `fantasy_teams`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `contest_entries` ADD CONSTRAINT `contest_entries_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `contests` ADD CONSTRAINT `contests_matchId_matches_id_fk` FOREIGN KEY (`matchId`) REFERENCES `matches`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `fantasy_team_players` ADD CONSTRAINT `fantasy_team_players_fantasyTeamId_fantasy_teams_id_fk` FOREIGN KEY (`fantasyTeamId`) REFERENCES `fantasy_teams`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `fantasy_team_players` ADD CONSTRAINT `fantasy_team_players_playerId_players_id_fk` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `fantasy_teams` ADD CONSTRAINT `fantasy_teams_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `fantasy_teams` ADD CONSTRAINT `fantasy_teams_matchId_matches_id_fk` FOREIGN KEY (`matchId`) REFERENCES `matches`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `fantasy_teams` ADD CONSTRAINT `fantasy_teams_contestId_contests_id_fk` FOREIGN KEY (`contestId`) REFERENCES `contests`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `fantasy_teams` ADD CONSTRAINT `fantasy_teams_captainId_players_id_fk` FOREIGN KEY (`captainId`) REFERENCES `players`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `fantasy_teams` ADD CONSTRAINT `fantasy_teams_viceCaptainId_players_id_fk` FOREIGN KEY (`viceCaptainId`) REFERENCES `players`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `match_players` ADD CONSTRAINT `match_players_matchId_matches_id_fk` FOREIGN KEY (`matchId`) REFERENCES `matches`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `match_players` ADD CONSTRAINT `match_players_playerId_players_id_fk` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `contest_idx` ON `contest_entries` (`contestId`);--> statement-breakpoint
CREATE INDEX `user_idx` ON `contest_entries` (`userId`);--> statement-breakpoint
CREATE INDEX `match_idx` ON `contests` (`matchId`);--> statement-breakpoint
CREATE INDEX `status_idx` ON `contests` (`status`);--> statement-breakpoint
CREATE INDEX `team_idx` ON `fantasy_team_players` (`fantasyTeamId`);--> statement-breakpoint
CREATE INDEX `player_idx` ON `fantasy_team_players` (`playerId`);--> statement-breakpoint
CREATE INDEX `user_idx` ON `fantasy_teams` (`userId`);--> statement-breakpoint
CREATE INDEX `match_idx` ON `fantasy_teams` (`matchId`);--> statement-breakpoint
CREATE INDEX `contest_idx` ON `fantasy_teams` (`contestId`);--> statement-breakpoint
CREATE INDEX `match_idx` ON `match_players` (`matchId`);--> statement-breakpoint
CREATE INDEX `player_idx` ON `match_players` (`playerId`);--> statement-breakpoint
CREATE INDEX `status_idx` ON `matches` (`status`);--> statement-breakpoint
CREATE INDEX `start_time_idx` ON `matches` (`startTime`);--> statement-breakpoint
CREATE INDEX `team_idx` ON `players` (`team`);--> statement-breakpoint
CREATE INDEX `role_idx` ON `players` (`role`);