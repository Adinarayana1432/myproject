import React, { useState } from 'react';
import '../Components/forgotpassw.css';
import  IMG  from '../Images/image.jpg'


function Forgotpassw() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="container1">
        <div className="container2">
            <h1 className="forgotpassword">Forgot Password</h1>
            <p className="resent">You will receive a password reset  link on your email</p>
            <label className="emailtext" htmlFor="name">Email</label> <br/>
            <input  className="inputbox1" type="email" id="name" name="name" placeholder="Enter email"/><br/>

            <button className="custom-checkbox">
            <input
            type="checkbox"
            id="custom-checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
      />
      <label htmlFor="custom-checkbox" className={isChecked ? 'checked' : ''}>
        {/* You can add text or any other content here */}
        Kindly check your mail.You will receive password resent link shortly
      </label>
            </button>

            <p className="p1"> Back to Login</p>
        </div>
        <div>
            <img  className="image" src={IMG}/>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassw
