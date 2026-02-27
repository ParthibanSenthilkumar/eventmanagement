import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";
import {errorToast, successToast} from './Toaster'
const Login = () => {
  const [username, setusername] = useState("");
  const [course, setcourse] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userinfo = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword,
      );
    successToast()
    setusername("");
    setEmail("");
    setcourse("");
    setPassword("");
      console.log("User:", userinfo.user);
    } catch (error) {
      errorToast(error.message);
    }
    fetch("https://task-668b3-default-rtdb.firebaseio.com/students.json", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        course: course,
      }),
    });
  };
  return (
    <>
      <div className="login-form mt-5">
        <form onSubmit={handleSubmit}>
          <h2>Registration From</h2>
          <div className="form_control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="password">password</label>
            <input
              type="password"
              placeholder="Enter Your password"
              value={userPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="course">course</label>
            <input
              type="text"
              placeholder="Enter Your course"
              value={course}
              onChange={(e) => setcourse(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Register</button>
        </form>
      </div>
    </>
  );
};

export default Login;
