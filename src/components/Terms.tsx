import React from 'react';

const TermsConditionsModal = ({ showModal, handleCloseModal }) => {
  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>Terms and Conditions</h2>
          <div>
            <p>Effective Date: [Insert Date]</p>
            <p>
              These Terms and Conditions govern your use of the services
              provided by Pragout group s.r.o. ("we," "us," or "our") through
              our website.
            </p>
            <h3>Acceptance of Terms</h3>
            <p>
              By using our website or services, you agree to be bound by these
              Terms and Conditions. If you do not agree, please do not use our
              services.
            </p>
            <h3>Intellectual Property</h3>
            <p>
              All content on our website, including text, images, logos, and
              trademarks, is the property of Pragout group s.r.o. or its
              licensors and is protected by intellectual property laws.
            </p>
            <h3>User Responsibilities</h3>
            <p>
              You are responsible for the accuracy and legality of the
              information you provide.
            </p>
            <p>
              You agree not to engage in any activity that may disrupt or
              interfere with our website or services.
            </p>
            <h3>Limitation of Liability</h3>
            <p>
              We strive to provide accurate and reliable information but do not
              guarantee the completeness or accuracy of our content.
            </p>
            <p>
              We are not liable for any direct, indirect, incidental, or
              consequential damages arising from your use of our website or
              services.
            </p>
            <h3>Links to Third-Party Websites</h3>
            <p>
              Our website may contain links to third-party websites for
              informational purposes. We do not endorse or assume responsibility
              for the content or practices of those websites.
            </p>
            <h3>Governing Law</h3>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of [Insert Jurisdiction].
            </p>
            <h3>Changes to the Terms and Conditions</h3>
            <p>
              We reserve the right to modify or update these Terms and
              Conditions at any time. The updated version will be effective upon
              posting on our website.
            </p>
          </div>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </div>
    )
  );
};

export default TermsConditionsModal;
