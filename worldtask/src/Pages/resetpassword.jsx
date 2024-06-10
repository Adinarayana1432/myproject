import React, { useState } from 'react';
import '../Components/resetpassword.css'

function SignUpForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;
    if (!email.includes('@gmail.com')) {
      alert('Please enter a valid Gmail address.');
    } else if (!password.includes('@') || !password.includes('123')) {
      alert('Password must contain "@" and "123"');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      // Add your form submission logic here
      alert('Form submitted:', formData);
    }
  };

  return (
    <div >
    <form className="container" onSubmit={handleSubmit}>
      <h1>Reset Password</h1>
      <div>
        <label>Email:</label><br/>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password:</label><br/>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Confirm Password:</label><br/>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      <button type="submit">Reset My Password</button>
    </form>
    </div>
  );
}

export default SignUpForm;
