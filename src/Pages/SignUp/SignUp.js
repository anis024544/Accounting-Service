import React, { useEffect, useState } from 'react';
import './SignUp.css'
import { Alert, Button, Form } from 'react-bootstrap';
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from './../../firebase.init';
import Loading from '../Shared/Loading';
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const validateForm = () => {
      let isValid = true;
  
      if (username.trim() === "") {
        setUsernameError("Username is required");
        isValid = false;
      } else {
        setUsernameError("");
      }
  
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


  
    const handleSubmit = async (event) => {
      event.preventDefault();
      validateForm();
      await createUserWithEmailAndPassword(email, password);
      
    };
  
    const handleGoogleLogin = () => {
      // Handle Google login logic here
    };
  

    return (
        <div className="signUp-form-container">
        <Form className="signUp-bg" onSubmit={handleSubmit}>
          <h2 className="text-white text-center">Sign Up</h2>
          <Form.Group controlId="formUsername">
            <Form.Label className="text-light">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              // value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              required
            />
            {/* {usernameError && (
              <Alert
                className="d-flex justify-content-center align-items-center error-message"
                variant="danger"
              >
                <MdOutlineReportGmailerrorred className="mx-1 error-logo" />
                {usernameError}
              </Alert>
            )} */}
          </Form.Group>
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
           {/* {passwordError && <Alert
                className="d-flex justify-content-center align-items-center error-message"
                variant="danger"
              >
                <MdOutlineReportGmailerrorred className="mx-1 error-logo" />
                {passwordError}
              </Alert>} */}
           
          </Form.Group>
  
          <Button variant="primary" type="submit" className="submit-button">
            Sign Up
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
         <p><small className="text-white">Already have an account? <Link className='text-warning' to='/login'>Login here</Link></small></p>
        
         </div>
         <p className="text-danger font-bold">{signInError}</p>
        </Form>
      </div>
    );
};

export default SignUp;