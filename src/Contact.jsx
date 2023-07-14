import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic goes here (e.g., API call, etc.)
      // Assuming the form is successfully submitted
      setSuccess(true);
      navigate('/Success');
    }
  };

  const validateForm = () => {
    const errors = {};

    if (firstName.trim() === '') {
      errors.firstName = 'First Name is required';
    }

    if (lastName.trim() === '') {
      errors.lastName = 'Last Name is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (phoneNumber.trim() === '') {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <div className="Raju">
      <div className="container">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name:</label>
            <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name:</label>
            <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
            <input type="text" className="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
