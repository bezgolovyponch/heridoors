import React, { useState, ChangeEvent, FormEvent } from 'react';

import { init, sendForm } from 'emailjs-com';

import PrivacyPolicyModal from './Privacy';
import TermsConditionsModal from './Terms';

const Pricing = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
    consent?: string;
  }>({
    name: '',
    email: '',
    message: '',
    consent: '',
  });

  const handleTermsModalOpen = () => {
    setShowTermsModal(true);
  };

  const handleTermsModalClose = () => {
    setShowTermsModal(false);
  };

  const handlePrivacyModalOpen = () => {
    setShowPrivacyModal(true);
  };

  const handlePrivacyModalClose = () => {
    setShowPrivacyModal(false);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setErrors({ ...errors, name: '' });
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: '' });
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    setErrors({ ...errors, message: '' });
  };

  const handleConsentCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConsentChecked(event.target.checked);
    setErrors({ ...errors, consent: '' });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formErrors: {
      name?: string;
      email?: string;
      message?: string;
      consent?: string;
    } = {};

    if (name.trim() === '') {
      formErrors.name = 'Name is required';
    }
    if (email.trim() === '') {
      formErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = 'Email is invalid';
    }
    if (message.trim() === '') {
      formErrors.message = 'Message is required';
    }
    if (!consentChecked) {
      formErrors.consent = 'You must accept the terms and conditions';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(
        formErrors as {
          name?: string;
          email?: string;
          message?: string;
          consent?: string;
        }
      );
    } else {
      init('FDgipbD-bbODkhERA');
      const formData = new FormData(event.target as HTMLFormElement);
      formData.set('from_name', name); // Set the sender's name
      formData.set('from_email', email); // Set the sender's email
      formData.set('from_message', message);

      sendForm(
        'service_test1',
        'template_cti1gfj',
        event.target as HTMLFormElement,
        'FDgipbD-bbODkhERA'
      )
        .then((response) => {
          console.log('Email sent successfully!', response);
          // Add any success handling code here
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // Add any error handling code here
        });
    }
  };

  return (
    <section className="bg-background py-8" id="contact">
      <TermsConditionsModal
        showModal={showTermsModal}
        handleCloseModal={handleTermsModalClose}
      />
      <PrivacyPolicyModal
        showModal={showPrivacyModal}
        handleCloseModal={handlePrivacyModalClose}
      />
      <div
        className="mx-auto px-2 pt-4 pb-12 text-primary"
        style={{ width: '100%' }}
      >
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
          Contact Us
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3 mx-auto lg:mx-0 bg-background mt-4 sm:-mt-6 z-10">
              <div className="bg-background rounded-t rounded-b-none overflow-hidden">
                <div className="w-full p-4 sm:p-8 text-3xl font-bold text-center">
                  Send us a message
                </div>
                <div className="h-1 w-full bg-primary my-0 py-0 rounded-t"></div>
                <div className="p-4 sm:p-8">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name="from_name"
                      placeholder="John Doe"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="email"
                    >
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="from_email"
                      placeholder="johndoe@example.com"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="message"
                    >
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      name="from_message"
                      rows={6}
                      placeholder="Enter your message here"
                      value={message}
                      onChange={handleMessageChange}
                      required
                    />
                    {errors.message && (
                      <p className="text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={consentChecked}
                        onChange={handleConsentCheckboxChange}
                        required
                      />
                      <span className="ml-2">
                        I accept the{' '}
                        <button
                          className="text-primary underline bg-transparent border-none p-0"
                          onClick={handleTermsModalOpen}
                        >
                          Terms and Conditions
                        </button>{' '}
                        and{' '}
                        <button
                          className="text-primary underline bg-transparent border-none p-0"
                          onClick={handlePrivacyModalOpen}
                        >
                          Privacy Policy
                        </button>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-red-500 mt-1">{errors.consent}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Pricing;
