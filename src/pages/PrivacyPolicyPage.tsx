import React from "react";
import { Logo } from "../components/Logo";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="mx-4 md:mx-0">
      <Logo />
      <h2 className="text-3xl font-semibold my-6 text-center">
        Privacy Policy
      </h2>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          This Privacy Policy describes how luismiac93 ("we", "us", or "our")
          collects, uses, and handles your personal information across all our
          products and services. We respect your privacy and are committed to
          protecting your personal data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Policy</h2>
        <p className="mb-4">
          By accessing or using any of luismiac93's products, services, or
          applications, you acknowledge that you have read, understood, and
          agree to be bound by the terms of this Privacy Policy. If you do not
          agree with any part of this policy, you must not use our products or
          services. Your continued use of our products and services following
          the posting of changes to this policy will be deemed your acceptance
          of those changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal identification information (name, email address)</li>
          <li>Usage data (how you interact with our website)</li>
          <li>Technical data (IP address, browser type, device information)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Use Your Information
        </h2>
        <p className="mb-4">We use the collected information for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Providing and maintaining our service</li>
          <li>Improving user experience</li>
          <li>Analyzing website performance</li>
          <li>Communicating with you</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to track activity on
          our website and hold certain information. You can instruct your
          browser to refuse all cookies or to indicate when a cookie is being
          sent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal
          information. However, no method of transmission over the Internet is
          100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or any of
          luismiac93's products, please contact us at:
          <br />
          <a
            href="mailto:luismiac93@gmail.com"
            className="transition-colors duration-300"
          >
            luismiac93@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
