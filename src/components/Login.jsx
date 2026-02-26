import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";
import { useNavigate } from "react-router";

const Login = () => {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [isError, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userinfo = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword,
      );
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="login-form mt-5">
        {isError && <p>{isError}</p>}
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
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
          <button className="btn btn-success">login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
