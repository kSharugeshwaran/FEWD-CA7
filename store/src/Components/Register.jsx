import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Register = () => {
  // State to track form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  // State to track form validation errors
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the respective validation error when user types
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form before submission
    if (validateForm()) {
      localStorage.setItem("User Data",JSON.stringify(formData))
      toast.success('Registered Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
        setFormData({
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      })

    } else {
      console.log('Form validation failed');
    }
  };

  // Function to validate the form
  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Validate name
    if (!formData.name.trim()) {
      newFormErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newFormErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    // Validate password
    if (formData.password.length < 6) {
      newFormErrors.password = 'Password should be at least 6 characters';
      isValid = false;
    }

    // Validate repeat password
    if (formData.password !== formData.repeatPassword) {
      newFormErrors.repeatPassword = 'Passwords do not match';
      isValid = false;
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',marginBottom: "5vh" }}>
      <fieldset>
        <div className='inputContainer' style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>R E G I S T E R</h2>
          <input
            type='text'
            placeholder='Your Name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
          <p style={{ color: 'red' }}>{formErrors.name}</p>

          <input
            type='email'
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <p style={{ color: 'red' }}>{formErrors.email}</p>

          <input
            type='password'
            placeholder='Password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          <p style={{ color: 'red' }}>{formErrors.password}</p>

          <input
            type='password'
            placeholder='Repeat Password'
            name='repeatPassword'
            value={formData.repeatPassword}
            onChange={handleInputChange}
          />
          <p style={{ color: 'red' }}>{formErrors.repeatPassword}</p>
        </div>
        <button onClick={handleSubmit}>Sign Up</button>
        
      </fieldset>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  );
};

export default Register;
