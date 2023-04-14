import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import "./Login.css";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ signInWithEmailAndPassword,user,loading, error]= useSignInWithEmailAndPassword(auth); 
  const navigate = useNavigate();
  const location = useLocation();
  const validateForm = () => {
    let isValid = true;

    

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  useEffect(() => {
    if(user){
      navigate('/')

     }
  }, [user]);

  let signInError;

  
  if(loading){
   return <Loading></Loading>
 }
 if(error ){
   signInError = <p className='d-flex  justify-content-center align-items-center pt-3'><small>{error?.message}</small></p>
 }






  const handleSubmit = async(event) => {
    event.preventDefault();
    validateForm();

     await signInWithEmailAndPassword(email, password)
  
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  return (
    <div className="login-form-container">
      <Form className="login-bg" onSubmit={handleSubmit}>
        <h2 className="text-white text-center">Login</h2>
        <Form.Group controlId="formUsername">
          <Form.Label className="text-light">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setUserEmail(e.target.value)}
            className="form-input"
          />

          {emailError && (
            <Alert
              className="d-flex justify-content-center align-items-center error-message"
              variant="danger"
            >
              <MdOutlineReportGmailerrorred className="mx-1 error-logo" />
              {emailError}
            </Alert>
          )}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button">
          Login
        </Button>

        <div className="divider">
          <span className="divider-text">or</span>
        </div>

        <Button
          variant="light"
          onClick={handleGoogleLogin}
          className="google-button"
        >
          <div className="G-logo-container mx-2">
            {" "}
            <FaGoogle className="text-white" />
          </div>
          Sign in with Google
        </Button>
       <div className="redirection-To-signUp mt-2">
       <p><small className="text-white">New to this website? <Link className='text-primary' to='/signUp'>Register here</Link></small></p>
       </div>
       <p className="text-danger font-bold">{signInError}</p>
      </Form>
    </div>
  );
};

export default Login;
