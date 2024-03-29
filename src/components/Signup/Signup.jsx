import React from 'react';
import './Signup.css'

function Signup() {
  return (
    <div className='body'>
      <form>
        <label>First Name</label>
        <input type="text" name="T1" required />

        <label>Last Name</label>
        <input type="text" name="T2" required />

        <label>Email Address</label>
        <input type="email" name="T3" required />
        
        <label>Password</label>
        <input type="password" name="T4" required />

        <label>Confirm password</label>
        <input type="password" name="T5" required />

        <label>Gender</label>
        <div className="group">
            <input type="radio" name="r1" /> Male
            <input type="radio" name="r1" /> Female
            <input type="radio" name="r1" /> Others
        </div>

        <label>Country</label>
        <select name="Country">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
        </select>

        <label>Profile</label>
        <input type="file" name="T6" />
        <input type="submit" value="Register" name="T7" />
      </form>
    </div>
  );
}

export default Signup;
