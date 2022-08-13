import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logIn, signUp, AuthResponse } from "../../API/AuthApi";
import { useRecoilState } from "recoil";
import { stateSignUpAtom, hastokenAtom } from "../../Atoms";

const LogInContatiner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(231, 246, 242);
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
  const [submitButton, setSubmitButton] = useState(false);
  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  const [ stateSignUp, setStateSignUP ] = useRecoilState<boolean>(stateSignUpAtom);
  const [ statehastokenAtom, setStatehastokenAtom ] = useRecoilState<boolean>(hastokenAtom);
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
    if (stateSignUp) {
      signUp(email, password).then((data => {
        const { message } = data as AuthResponse
        alert(message)
      })).catch(error => {alert(error.response.data.details)})
    } else {
      logIn(email, password).then((data=> {
        const { message, token } = data as AuthResponse;
        localStorage.setItem('token', token);
        setStatehastokenAtom(true);
        alert(message);
        if (token) {
          navigate("/todos");
        }
      })).catch(error => {alert(error.response.data.details)})
    }
  };

  useEffect (() => {
    if (localStorage.getItem("token")) {
      setStatehastokenAtom(true);
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