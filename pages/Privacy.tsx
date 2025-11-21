import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-12">Privacy Policy</h1>
        
        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information necessary to provide our services, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Personal identification information (Name, email address, etc.).</li>
              <li>Billing information (processed securely by our payment providers).</li>
              <li>Technical data (IP address, browser type) for security and analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>
              Your data is used to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-slate-400">
              <li>Process your orders and manage your account.</li>
              <li>Send important service notifications and updates.</li>
              <li>Provide customer support.</li>
              <li>Prevent fraud and abuse of our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Protection</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
            <p>
              We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Privacy Policy</h2>
            <p>
              We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
            </p>
          </section>

          <div className="pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500">Last Updated: October 26, 2025</p>
            <Link to="/" className="text-brand-accent hover:underline mt-4 inline-block">Return Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;