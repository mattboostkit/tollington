import React from 'react';
import { motion } from 'framer-motion';

import SEO from '../components/SEO';
import Hero from '../components/Hero';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Tollington Gospel Choir website"
      />

      <Hero
        title="Privacy Policy"
        subtitle="Last updated: June 2024"
        image="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="small"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <h2>Introduction</h2>
              <p>
                This Privacy Policy explains how Tollington Gospel Choir ("we," "our," or "us") collects, uses, and shares information about you when you use our website, tollingtongospelchoir.org (the "Site").
              </p>
              <p>
                We respect your privacy and are committed to protecting your personal data. Please read this Privacy Policy carefully to understand our practices regarding your personal data.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> This includes your name, email address, phone number, and other contact details that you provide when you contact us, sign up for our newsletter, or apply to join the choir.
                </li>
                <li>
                  <strong>Usage Information:</strong> We collect information about how you use our Site, including your IP address, browser type, pages viewed, time spent on pages, and other browsing information.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to enhance your experience on our Site. You can control cookies through your browser settings.
                </li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>To provide and maintain our Site</li>
                <li>To notify you about changes to our Site or services</li>
                <li>To allow you to participate in interactive features when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Site</li>
                <li>To monitor the usage of our Site</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To send you newsletters and other communications if you have subscribed to them</li>
              </ul>

              <h2>Sharing Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
              </p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights or property</li>
                <li>With your consent or at your direction</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to restrict or object to processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: tollingtongospelchoir@gmail.com<br />
                Address: St Saviour's Church, Hanley Road, London N4 3DQ
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
