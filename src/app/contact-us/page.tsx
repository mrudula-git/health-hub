"use client"
import React, { useState } from 'react';
import { validateField } from "./validationUtils";

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const error = validateField(name, value, {
      required: true,
      minLength: name === "message" ? 10 : undefined,
      maxLength: name === "message" ? 500 : undefined,
    });

    setValidationErrors({
      ...validationErrors,
      [name]: error,
    });
  };

  const scrollToFirstError = () => {
    const errorField = Object.keys(validationErrors).find(
      (field) => validationErrors[field] !== ""
    );

    if (errorField) {
      const errorElement = document.getElementById(`${errorField}-error`);

      if (errorElement) {
        const yOffset = -100;
        const y =
          errorElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });

        const fieldWithError = document.getElementById(errorField);
        if (fieldWithError) {
          fieldWithError.focus();
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    Object.keys(formData).forEach((name) => {
      const value = formData[name];
      const error = validateField(name, value, {
        required: true,
        minLength: name === "message" ? 10 : undefined,
        maxLength: name === "message" ? 500 : undefined,
      });
      errors[name] = error;
    });

    setValidationErrors(errors);

    if (Object.values(errors).some((error) => error !== "")) {
      scrollToFirstError();
      return;
    }

    try {
      const response = await fetch('/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Form submitted successfully:', responseData);
        setFormSubmitted(true);

        const emailResponse = await fetch('/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (emailResponse.ok) {
          console.log('Email sent successfully!');
        } else {
          console.error('Error sending email');
        }
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md border">

        <h2 className="text-3xl font-semibold mb-4 flex justify-center">
          {formSubmitted ? 'Thank You!' : 'Contact Us'}
        </h2>
        <hr />
        <br />
        <br />

        {formSubmitted ? (
          <p className="text-green-700 text-sm mb-4">
            Thank you for your message. We'll get back to you soon!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 p-2 w-full border rounded-md ${validationErrors.name ? 'border-red-500' : ''
                  }`}
                placeholder="John Doe"
              />
              {validationErrors.name && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 p-2 w-full border rounded-md ${validationErrors.email ? 'border-red-500' : ''
                  }`}
                placeholder="john@example.com"
              />
              {validationErrors.email && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className={`mt-1 p-2 w-full border rounded-md ${validationErrors.mobile ? 'border-red-500' : ''
                  }`}
                placeholder="Enter your mobile number"
              />
              {validationErrors.mobile && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.mobile}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`mt-1 p-2 w-full border rounded-md ${validationErrors.message ? 'border-red-500' : ''
                  }`}
                placeholder="Type your message here..."
              ></textarea>
              {validationErrors.message && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>
              )}
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-purple-800 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
      <br />
    </div>
  );
}

export default ContactUsForm;
