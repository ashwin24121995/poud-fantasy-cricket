import React from 'react';
import { Shield, Scale, Brain, Users, FileText, MapPin, Building2, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-orange-600 to-orange-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/about-hero.webp" 
            alt="POUD Office Environment" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-4">About POUD</h1>
            <p className="text-xl text-orange-100">
              Building India's Most Transparent Skill-Based Fantasy Sports Platform
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                POUD INFRASTRUCTURES PRIVATE LIMITED is a legally registered Indian company operating in the fantasy sports industry. We are committed to providing a skill-based gaming platform that prioritizes transparency, legal compliance, and responsible gaming practices.
              </p>
              <p>
                Founded with the vision of creating a fair and transparent fantasy sports ecosystem, we operate strictly within the legal framework established by Indian laws and regulations. Our platform is designed for users who enjoy strategic thinking and sports knowledge-based competitions.
              </p>
              <p>
                We believe in complete honesty with our users. Fantasy sports involves financial risk, and while skill plays a significant role, outcomes are never guaranteed. We do not promise winnings, guaranteed returns, or unrealistic success rates. Every user should participate responsibly and within their financial means.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Transparency */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6">
                <img 
                  src="/transparency-icon.webp" 
                  alt="Transparency" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Complete Transparency</h3>
              <p className="text-gray-600 text-center">
                We provide clear terms, visible odds, and honest communication about risks and rewards. No hidden clauses or misleading promises.
              </p>
            </div>

            {/* Legal Compliance */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6">
                <img 
                  src="/legal-compliance.webp" 
                  alt="Legal Compliance" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Legal Compliance</h3>
              <p className="text-gray-600 text-center">
                Fully registered company adhering to all applicable Indian laws, including tax regulations and state-specific gaming laws.
              </p>
            </div>

            {/* Skill-Based */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6">
                <img 
                  src="/skill-based.webp" 
                  alt="Skill-Based Gaming" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Skill-Based Platform</h3>
              <p className="text-gray-600 text-center">
                Success depends on sports knowledge, strategic thinking, and analytical skills - not pure chance or luck.
              </p>
            </div>

            {/* Responsible Gaming */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6">
                <img 
                  src="/responsible-gaming.webp" 
                  alt="Responsible Gaming" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Responsible Gaming</h3>
              <p className="text-gray-600 text-center">
                We promote healthy gaming habits with deposit limits, self-exclusion options, and clear risk warnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are NOT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Clarifications</h2>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-orange-900 mb-4">What POUD is NOT:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span><strong>Not a get-rich-quick scheme:</strong> Fantasy sports requires skill, research, and strategy. Most users play for entertainment, not as a primary income source.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span><strong>Not gambling:</strong> We operate as a skill-based platform under Indian law, distinct from games of pure chance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span><strong>Not guaranteed winnings:</strong> We never promise specific returns, win rates, or guaranteed profits. Outcomes depend on your skills and decisions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span><strong>Not available everywhere:</strong> We comply with state laws and do not operate in states where fantasy sports are restricted or prohibited.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span><strong>Not for minors:</strong> Our platform is strictly for users aged 18 and above, as required by law.</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Our Honest Commitment:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>We clearly display all fees, charges, and prize distribution structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>We provide accurate statistics and transparent contest mechanics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>We process withdrawals fairly and within stated timeframes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>We maintain secure payment systems and protect user data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>We provide responsive customer support for genuine issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal & Company Information</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Building2 className="w-6 h-6 text-orange-600 mr-3" />
                Company Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Registered Company Name</p>
                  <p className="text-gray-900 font-semibold">POUD INFRASTRUCTURES PRIVATE LIMITED</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Corporate Identity Number (CIN)</p>
                  <p className="text-gray-900 font-semibold">U45209HR2019PTC081289</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Permanent Account Number (PAN)</p>
                  <p className="text-gray-900 font-semibold">AAKCP6451F</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Tax Deduction Account Number (TAN)</p>
                  <p className="text-gray-900 font-semibold">RTKP10324G</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                Registered Office Address
              </h3>
              <p className="text-gray-700 leading-relaxed">
                C/O NARAYAN SINGH<br />
                DERA MUNAK, KARNAL<br />
                Karnal, Haryana, India<br />
                PIN: 132040
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 text-orange-600 mr-3" />
                Legal Compliance
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Tax Compliance:</strong> We comply with all applicable Indian tax laws, including TDS (Tax Deducted at Source) on winnings as per Income Tax Act provisions.
                </p>
                <p>
                  <strong>State Regulations:</strong> We adhere to state-specific laws regarding skill-based gaming and do not operate in states where such activities are prohibited.
                </p>
                <p>
                  <strong>Data Protection:</strong> We follow data protection best practices and handle user information responsibly, though we are transparent that we are a small company with limited resources.
                </p>
                <p>
                  <strong>Financial Regulations:</strong> All financial transactions are processed through legitimate payment gateways with proper documentation and audit trails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Gaming */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Responsible Gaming Commitment</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                We take responsible gaming seriously and encourage all users to participate within their financial means. Fantasy sports should be entertainment, not a financial burden.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Responsible Gaming Features:</h3>
              <ul className="space-y-2 ml-6">
                <li>Deposit limits to control spending</li>
                <li>Self-exclusion options for users who need a break</li>
                <li>Clear display of money spent and won</li>
                <li>Age verification to prevent minor access</li>
                <li>Resources and helpline information for problem gaming</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8">
                <h3 className="text-xl font-bold text-red-900 mb-3">Warning Signs of Problem Gaming:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Spending more money than you can afford to lose</li>
                  <li>• Chasing losses by depositing more money</li>
                  <li>• Neglecting personal or professional responsibilities</li>
                  <li>• Borrowing money to play fantasy sports</li>
                  <li>• Feeling anxious or stressed about gaming outcomes</li>
                </ul>
                <p className="mt-4 font-semibold text-red-900">
                  If you recognize these signs, please seek help immediately. Contact support@poud.com for self-exclusion options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-start mb-6">
                  <Mail className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-2">For general inquiries and support:</p>
                    <a href="mailto:support@poud.com" className="text-orange-600 hover:text-orange-700 font-semibold">
                      support@poud.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Legal Inquiries</h3>
                    <p className="text-gray-600 mb-2">For legal and compliance matters:</p>
                    <a href="mailto:legal@poud.com" className="text-orange-600 hover:text-orange-700 font-semibold">
                      legal@poud.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Registered Office</h3>
                    <p className="text-gray-600 leading-relaxed">
                      POUD INFRASTRUCTURES PRIVATE LIMITED<br />
                      C/O NARAYAN SINGH<br />
                      DERA MUNAK, KARNAL<br />
                      Karnal, Haryana - 132040<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
              <p className="text-gray-700">
                <strong>Business Hours:</strong> Monday to Friday, 10:00 AM - 6:00 PM IST<br />
                <span className="text-sm text-gray-600">We aim to respond to all inquiries within 48 business hours</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Disclaimer */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 leading-relaxed">
              POUD operates a skill-based fantasy sports platform. Participation involves financial risk. 
              We do not guarantee winnings or returns. Play responsibly and within your means. 
              Users must be 18+ years old. Not available in all Indian states.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
