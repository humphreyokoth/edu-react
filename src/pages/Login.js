import React, { useState } from "react";
import {authService} from "../services/authServices";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log(formData)
      await authService.loginUser(formData);
  }
  return (
    <div className="login">
   
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input name="email"
         type="email"
         required
         value={formData.email}
         onChange={handleChange}
         placeholder="enter email"
         />
        <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          required
          value={formData.password}
         onChange={handleChange}
          placeholder="enter your email"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
