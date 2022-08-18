import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import styled from "styled-components";

import {AxiosError} from 'axios'
import { signInResponse, IAuthInPut, IAuthResponse, signUpResponse } from "../../API/AuthApi";


import { useRecoilState } from "recoil";
import { stateSignUpAtom, hastokenAtom, hasErrorAtom} from "../../Atoms/AuthAtoms";

import SignInErrorModal from "../../Modals/SignInErrorModal";

const LogInFormContatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 150px;
`;

const LogInForm = styled.form`
  position: relative;
  padding: 15px 0 0;

`

const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
`


const InputBox = styled.div`
  display: flex;
  flex-direction: row;

`
const StateConfirm = styled.div`
  padding: 7px 0;
  color: red;
  margin-top: 10px;
`

const SignInbutton = styled.button`
  background-color: #2C3333;
  outline: none;
  border: 0;
  color: white;
  padding:10px 20px;
  text-transform:uppercase;
  margin-top:20px;
  border-radius:5px;
  cursor:pointer;
  position:relative;
`


const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitButton, setSubmitButton] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [Error, setError] = useState<any>("");
  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  const [ statehastokenAtom, setStatehastokenAtom ] = useRecoilState<boolean>(hastokenAtom);
  const [ statehasErrorAtom, setStatehasErrorAtom ] = useRecoilState<boolean>(hasErrorAtom);
  const navigate = useNavigate();
  

  const SignIn = useMutation<IAuthResponse, AxiosError, IAuthInPut, unknown>(
    ((singnInInPut: IAuthInPut) => signInResponse(singnInInPut.email, singnInInPut.password)))

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
    {
      SignIn.mutate({email,password}, {
        onSuccess: (res) => {
          const { message, token } = res.data;
          localStorage.setItem('token', token);
          setStatehastokenAtom(true);
          if (token) {
                navigate("/todos");
              }
        },
        onError: (err) => {
          setStatehasErrorAtom(true);
          setError(err);
        }
      })
    }
  };

  useEffect (() => {
    {(regEmail.test(email)) ? setConfirmEmail(true) : setConfirmEmail(false)}
    {(password.length > 7) ? setConfirmPassword(true) : setConfirmPassword(false)}
    {(regEmail.test(email) && password.length > 7) ? 
      setSubmitButton(true) : setSubmitButton(false)}
    setStatehasErrorAtom(false);
  },[password, email]);
  return (
      <LogInFormContatiner>
        <LogInForm onSubmit={onSubmit} className="container">
          <InputBox>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={onChange}
              className="authInput"
            />
            {confirmEmail ? 
            <div></div>
            : <StateConfirm>X</StateConfirm>}
          </InputBox>
          <InputBox>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={onChange}
              className="authInput"
              minLength={8}
            />
            {confirmPassword ? 
            <div></div>
            : <StateConfirm>X</StateConfirm>}
          </InputBox>
          {submitButton ? <div>
            <SignInbutton
            type="submit"
            className="authInput authSubmit"
            value={ "SignIn" }
            > Sign In</SignInbutton>
            </div>
          : <div></div>}
          {statehasErrorAtom ? <div>
            <SignInErrorModal Error={Error} />
            </div>
          : <div></div>}

        </LogInForm>
      </LogInFormContatiner>
  );
};
export default SignInForm;