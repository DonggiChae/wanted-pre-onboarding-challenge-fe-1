import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logIn, signUp, AuthResponse } from "./AuthApi";

const inputStyles = styled.div`

`;


const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [submitButton, setSubmitButton] = useState(false);
  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onChange = (event:any) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (newAccount) {
      signUp(email, password).then((data => {
        const { message } = data as AuthResponse
        alert(message)
      })).catch(error => {alert(error.response.data.details)})
    } else {
      logIn(email, password).then((data=> {
        const { message, token } = data as AuthResponse
        localStorage.setItem('token', token)
        alert(message)
        console.log(message, token)
        if (token) {
          navigate("/todos")
        }
      })).catch(error => {alert(error.response.data.details)})
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);


  useEffect (() => {
    if (localStorage.getItem("token")) {
      navigate("/todos")
    }
  },[]);

  useEffect (() => {
    {(regEmail.test(email) && password.length > 7) ? 
      setSubmitButton(true) : setSubmitButton(false)}
  },[password, email]);
  return (
    <>
      <form onSubmit={onSubmit} className="container">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="authInput"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          className="authInput"
          minLength={8}
        />
        {submitButton ? <input
          type="submit"
          className="authInput authSubmit"
          value={newAccount ? "Create Account" : "Sign In"}
        />: <></>}
        {error && <span className="authError">{error}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? "Sign In" : "Create Account"}
      </span>
    </>
  );
};
export default AuthForm;