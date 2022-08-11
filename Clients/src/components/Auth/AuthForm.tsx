import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logIn, signUp, AuthResponse } from "./AuthApi";
import { useRecoilState } from "recoil";
import { stateSignUpAtom } from "../../Atoms";

const LogInContatiner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #395B64;
  padding: 50px;
  border-radius: 10px;
`;

const SignUPlogo = styled.div`
  font-family: 'Roboto Condensed',sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 100px;
`

const LogInFormContatiner = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;

`

const InputBox = styled.input`

`


const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [submitButton, setSubmitButton] = useState(false);
  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  const [error, setError] = useState("");
  const [ stateSignUp, setStateSignUP ] = useRecoilState<boolean>(stateSignUpAtom)
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
    <LogInContatiner>
      <SignUPlogo>
        { stateSignUp ? "Sign Up" : "Sign In"}
      </SignUPlogo>
      <LogInFormContatiner>
        <LogInForm onSubmit={onSubmit} className="container">
          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
            className="authInput"
          />
          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
            className="authInput"
            minLength={8}
          />
          {submitButton ? <div>
            <input
            type="submit"
            className="authInput authSubmit"
            value={ stateSignUp ? "Sign Up" : "Sign In"}
            />
            </div>
          : <div></div>}
        </LogInForm>
      </LogInFormContatiner>
    </LogInContatiner>
  );
};
export default AuthForm;