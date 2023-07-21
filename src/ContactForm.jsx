import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the data and function from location.state
  const { editData, dataIndex } = location.state || {};
  const [formData, setFormData] = useState(editData || {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  useEffect(() => {
    // Set the form data from location.state when it is available
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format (10 digits only)';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      // Perform the regular form submission logic
      console.log('Form submitted successfully!');
      // Save form data in local storage
      const storedDataList = JSON.parse(localStorage.getItem('formDataList')) || [];
      if (editData) {
        // If editing existing data, update the data at the given index
        storedDataList[dataIndex] = formData;
      } else {
        // If adding new data, add it to the end of the list
        storedDataList.push(formData);
      }
      localStorage.setItem('formDataList', JSON.stringify(storedDataList));

      // Clear the form fields and errors after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      });
      setErrors({});

      // Navigate to the success page
      navigate('/success');
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <div className="Raju">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div>
            <h1>{editData ? 'Edit' : 'Contact'} Form</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={errors.firstName ? 'form-control is-invalid' : 'form-control'}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>

            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={errors.lastName ? 'form-control is-invalid' : 'form-control'}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'form-control is-invalid' : 'form-control'}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={errors.phoneNumber ? 'form-control is-invalid' : 'form-control'}
              />
              {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
            </div>
            <div className="Add">
            <button type="submit" className="btn btn-primary">
              {editData ? 'Update' : 'Add'}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

