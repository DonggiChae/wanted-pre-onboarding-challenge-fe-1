import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import styled from "styled-components";

import {AxiosError} from 'axios'
import { signInResponse, IAuthInPut, IAuthResponse } from "../../API/AuthApi";


import { useRecoilState } from "recoil";
import { stateSignUpAtom, hastokenAtom } from "../../Atoms";


const LogInFormContatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100px;
`;

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;

`

const InputBox = styled.input`

`


const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitButton, setSubmitButton] = useState(false);
  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  const [ statehastokenAtom, setStatehastokenAtom ] = useRecoilState<boolean>(hastokenAtom);
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
        }
      })
    }
  };

  useEffect (() => {
    {(regEmail.test(email) && password.length > 7) ? 
      setSubmitButton(true) : setSubmitButton(false)}
  },[password, email]);
  return (
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
            value={ "SignIn" }
            />
            </div>
          : <div></div>}
        </LogInForm>
      </LogInFormContatiner>
  );
};
export default SignInForm;