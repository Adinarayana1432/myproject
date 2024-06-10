import React,{useState} from 'react';
import '../Components/sendlink.css';
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

               <div className='buttondiv'>
                <button className={`button1 ${isChecked ? 'checked' : ''}`}>
                Send Reset Link
                </button>
                <a className='backtoLogin'>Back to Login</a>
                </div>
            
            </div>
            <div>
            <img  className="image" src={IMG}/>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassw
