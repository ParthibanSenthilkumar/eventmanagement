import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";
import { Link, useNavigate } from "react-router";
import { successToast, errorToast } from "./Toaster";

const Login = () => {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userinfo = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword,
      );
      successToast("Login Successfully");
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (error) {
      errorToast(error.message);
    }
  };
  return (
    <>
      <div className="login-form mt-5">
        <form onSubmit={handleSubmit}>
          <h2> Welcome </h2>
          <div className="form_group">
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
            <Link to="/" className="forget-txt">
              Forget Password?
            </Link>
          </div>
          <button className="but log-but">login</button>
          <h5 className="logfoot-text">
            Don't have an account? <Link to="/register">Register Now</Link>
          </h5>
        </form>
      </div>
    </>
  );
};

export default Login;
