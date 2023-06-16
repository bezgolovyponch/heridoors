import React from 'react';

interface PrivacyPolicyModalProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  showModal,
  handleCloseModal,
}) => {
  if (!showModal) {
    return null;
  }
  return (
    <div className="modal">
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Privacy Policy</h2>
            <div>
              <p>Effective Date: [Insert Date]</p>
              <p>
                This Privacy Policy describes how Pragout group s.r.o. collects,
                uses, and discloses personal information when you use our
                website or services.
              </p>
              <h3>Information We Collect</h3>
              <p>
                <strong>Personal Information:</strong> We may collect personal
                information such as names, email addresses, and contact details
                when voluntarily provided by users.
              </p>
              <p>
                <strong>Usage Information:</strong> We may collect non-personal
                information about your interactions with our website or
                services, such as IP addresses, browser type, and pages visited.
              </p>
              <h3>Use of Information</h3>
              <p>
                We use the collected information to provide and improve our
                services, personalize user experiences, and communicate with
                users about their inquiries or requests.
              </p>
              <p>
                We may also use the information to send promotional emails or
                newsletters, but users can opt out at any time.
              </p>
              <h3>Data Sharing</h3>
              <p>
                We do not sell or disclose personal information to third parties
                unless required by law or with user consent.
              </p>
              <p>
                We may share non-personal information with service providers or
                partners who assist in operating our website or providing our
                services.
              </p>
              <h3>Data Security</h3>
              <p>
                We take reasonable measures to protect personal information from
                unauthorized access, disclosure, or alteration.
              </p>
              <p>
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
              <h3>Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites, which
                have their own privacy policies. We are not responsible for the
                content or practices of those websites.
              </p>
              <h3>Your Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal
                information. Please contact us to exercise these rights.
              </p>
              <p>
                We will retain personal information as long as necessary to
                fulfill the purposes outlined in this Privacy Policy.
              </p>
              <h3>Changes to the Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. The updated
                version will be effective upon posting on our website.
              </p>
            </div>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyModal;
