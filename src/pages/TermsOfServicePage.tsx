import React from 'react';
import { motion } from 'framer-motion';

import SEO from '../components/SEO';
import Hero from '../components/Hero';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for Tollington Gospel Choir website"
      />

      <Hero
        title="Terms of Service"
        subtitle="Last updated: June 2024"
        image="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                Welcome to Tollington Gospel Choir's website. These Terms of Service ("Terms") govern your use of our website located at tollingtongospelchoir.org (the "Site") and form a binding legal agreement between you and Tollington Gospel Choir ("we," "our," or "us").
              </p>
              <p>
                By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Site.
              </p>

              <h2>Use of the Site</h2>
              <p>You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site. Prohibited behavior includes:</p>
              <ul>
                <li>Conducting any systematic or automated data collection activities without our prior consent</li>
                <li>Using the Site in any way that causes, or may cause, damage to the Site or impairment of the availability or accessibility of the Site</li>
                <li>Using the Site in any way that is unlawful, illegal, fraudulent, or harmful</li>
                <li>Using the Site for any purpose related to marketing without our express written consent</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                The content on the Site, including text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Tollington Gospel Choir or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                You may view, download, and print content from the Site for your personal, non-commercial use, provided that you do not modify or delete any copyright, trademark, or other proprietary notices.
              </p>

              <h2>User Contributions</h2>
              <p>
                If you submit any material to our Site (such as comments, reviews, or applications), you grant us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content in any existing or future media.
              </p>
              <p>
                You represent and warrant that your content is original to you and does not infringe on any third party's rights. You also confirm that your content does not contain any material that is unlawful, defamatory, or otherwise objectionable.
              </p>

              <h2>Links to Other Websites</h2>
              <p>
                Our Site may contain links to third-party websites or services that are not owned or controlled by Tollington Gospel Choir. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p>
                You acknowledge and agree that Tollington Gospel Choir shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p>
                The Site is provided on an "as is" and "as available" basis. Tollington Gospel Choir makes no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, materials, or products included on the Site.
              </p>
              <p>
                To the full extent permissible by applicable law, Tollington Gospel Choir disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Tollington Gospel Choir will not be liable for any damages of any kind arising from the use of the Site, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
              </p>

              <h2>Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date at the top of this page.
              </p>
              <p>
                Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
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

export default TermsOfServicePage;
