import { useState } from "react";

import Navbar from "../components/Navbar"; // Import Navbar component
import Footer from "../components/Footer"; // Import Footer component

// Main Contact Section Component
const ContactSection = () => {
  return (
    <div id="luxy" className="page-wrapper">
      <Navbar />
      <div className="main-wrapper">
        <div className="section-contact wf-section">
          <div className="page-padding">
            <div className="vertical-spacing is--top-large">
              <div className="container">
                <div className="contact-section-grid">
                  <ContactTopImage />
                  <ContactForm />
                  <ContactDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Contact Top Image Component
const ContactTopImage = () => {
  return (
    <div className="contact-section-top-image-wrapper">
      <img
        src=""
        loading="lazy"
        width="297"
        sizes="(max-width: 767px) 160px,
               (max-width: 991px) 30vw,
               297px"
        alt=""
      />
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    field: "",
  });

  const [formStatusMessage, setFormStatusMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (
      !formData.Name ||
      !formData.Email ||
      !formData.Subject ||
      !formData.field
    ) {
      return "All fields are required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.Email)) {
      return "Please enter a valid email address.";
    }
    return null;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      //   setErrorMessage(validationError);
      setFormStatusMessage(null);
      return;
    }
    setErrorMessage(null);
    // setFormStatusMessage('Thank you! Your submission has been received!');
    // Reset form fields
    setFormData({
      Name: "",
      Email: "",
      Subject: "",
      field: "",
    });
  };

  return (
    <div
      id="w-node-_2feb7bfc-cf45-b9bd-dff2-f48e0c2085e4-1da9ad05"
      className="contact-section-left-wrapper"
    >
      <h2 className="heading-large">Let’s build something cool together</h2>
      <div className="form-wrapper">
        <div className="contact-form w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            method="get"
            onSubmit={handleSubmit}
            className="form-grid"
            aria-label="Email Form"
          >
            <div className="field-wrapper">
              <label htmlFor="Name" className="field-label">
                Name
              </label>
              <input
                type="text"
                className="contact-field w-input"
                maxLength={256}
                name="Name"
                data-name="Name"
                placeholder=""
                id="Name"
                value={formData.Name}
                onChange={handleChange}
              />
            </div>
            <div className="field-wrapper">
              <label htmlFor="Email" className="field-label">
                Email
              </label>
              <input
                type="email"
                className="contact-field w-input"
                maxLength={256}
                name="Email"
                data-name="Email"
                placeholder=""
                id="Email"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
            <div className="field-wrapper">
              <label htmlFor="Subject" className="field-label">
                Subject
              </label>
              <input
                type="text"
                className="contact-field w-input"
                maxLength={256}
                name="Subject"
                data-name="Subject"
                placeholder=""
                id="Subject"
                value={formData.Subject}
                onChange={handleChange}
              />
            </div>
            <div className="field-wrapper">
              <label htmlFor="field" className="field-label">
                Message
              </label>
              <textarea
                placeholder=""
                maxLength={5000}
                id="field"
                name="field"
                data-name="field"
                className="contact-field message w-input"
                value={formData.field}
                onChange={handleChange}
              ></textarea>
            </div>
            <input
              type="submit"
              value={formStatusMessage ? "Submitted!" : "Submit"}
              data-wait="Please wait..."
              id="w-node-_708d639f-2704-90a2-d3f6-548336a27ece-1da9ad05"
              className={`cta-button contact-form w-button ${
                formStatusMessage ? "submitted" : ""
              }`}
            />
          </form>
          {errorMessage && (
            <div
              className="error-state w-form-fail visible"
              tabIndex={-1}
              role="alert"
              aria-live="assertive"
            >
              <div>{errorMessage}</div>
            </div>
          )}
          {formStatusMessage && (
            <div
              className="success-state w-form-done visible"
              tabIndex={-1}
              role="alert"
              aria-live="polite"
            >
              <div>{formStatusMessage}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Contact Details Component
const ContactDetails = () => {
  return (
    <div
      id="w-node-_48473efd-9633-db46-9c50-86d528028596-1da9ad05"
      className="contact-section-left"
    >
      <ContactDetailsWrapper />
      <SocialLinks />
    </div>
  );
};

// Contact Details Wrapper Component
const ContactDetailsWrapper = () => {
  return (
    <div className="contact-details-wrapper">
      <div className="text-color-dark-grey">
        <div>Contact Details</div>
      </div>
      <DetailsLinkWrapper />
    </div>
  );
};

// Details Link Wrapper Component
const DetailsLinkWrapper = () => {
  return (
    <div className="details-link-wrapper">
      <a
        href={`mailto:@gmail.com`}
        className={`detail-link margin-bottom-6`}
      >
        @gmail.com
      </a>
      <br />
      <a href={`tel:+62`} className={`detail-link`}>
        +62
      </a>
    </div>
  );
};

// Social Links Component
const SocialLinks = () => {
  return (
    <div className={`contact-social-wrapper`}>
      <div className={`text-color-dark-grey`}>
        <div>Social</div>
      </div>
      <ContactSocialLinksWrapper />
    </div>
  );
};

// Contact Social Links Wrapper Component
const ContactSocialLinksWrapper = () => {
  return (
    <div className={`contact-social-links-wrapper`}>
      <a
        href={`/`}
        target="_blank"
        rel="noopener noreferrer"
        className={`detail-link`}
      >
        Linkedin
      </a>
      <br />
      <a
        href={`/`}
        target="_blank"
        rel="noopener noreferrer"
        className={`detail-link`}
      >
        Instagram
      </a>
      <br />
      <a
        href={`/`}
        target="_blank"
        rel="noopener noreferrer"
        className={`detail-link`}
      >
        Twitter
      </a>
      <a
        href={`/`}
        target="_blank"
        rel="noopener noreferrer"
        className={`detail-link`}
      >
        Webflow
      </a>
      <a
        href={`/`}
        target="_blank"
        rel="noopener noreferrer"
        className={`detail-link`}
      >
        Figma
      </a>
    </div>
  );
};

export default ContactSection;
