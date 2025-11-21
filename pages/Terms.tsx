import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-12">Terms of Service</h1>
        
        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by KSCloud Hosting ("we", "us", "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Usage</h2>
            <p className="mb-4">You agree to use our services only for lawful purposes. The following activities are strictly prohibited:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Hosting illegal content or copyrighted material without permission.</li>
              <li>Running malicious software, scripts, or botnets.</li>
              <li>Attempting to gain unauthorized access to our systems or other users' accounts.</li>
              <li>Engaging in activities that degrade service performance for others (e.g., crypto mining).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Payments and Refunds</h2>
            <p>
              Services are billed in advance. Failure to pay will result in service suspension and eventual termination. 
            </p>
            <p className="mt-4 p-4 bg-white/5 border-l-4 border-white rounded-r-xl">
              <strong>Refund Policy:</strong> We offer a 24-hour money-back guarantee only in cases where there is a clear, demonstrable technical problem with the server that our support team cannot resolve. No refunds will be issued for change of mind or user error.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Service Availability</h2>
            <p>
              We strive for 99.9% uptime, but we cannot guarantee uninterrupted service due to maintenance, hardware failure, or force majeure events. We are not liable for data loss; customers are responsible for their own off-site backups unless a backup service is purchased.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify, replace, or update these Terms of Service at any time without prior notice. Continued use of our services after any such changes constitutes your acceptance of the new Terms. It is your responsibility to review this page periodically for changes.
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

export default Terms;