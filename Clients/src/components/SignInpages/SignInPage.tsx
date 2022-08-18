import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

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
  margin-bottom: 20px;
`

const LogInFormContatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100px;
`;



const SignInPage = () => {
  const [ stateSignUp, setStateSignUP ] = useRecoilState<boolean>(stateSignUpAtom);
  const [ statehastokenAtom, setStatehastokenAtom ] = useRecoilState<boolean>(hastokenAtom);
  const navigate = useNavigate();
  

  useEffect (() => {
    if (localStorage.getItem("token")) {
      setStatehastokenAtom(true);
      navigate("/todos")
    }
  },[]);

  return (
    <LogInContatiner>
      <SignUPlogo>
        { stateSignUp ? "SignUp"  : "SignIn"}
      </SignUPlogo>
      <LogInFormContatiner>
        { stateSignUp ? <SignUpForm /> : <SignInForm />}
      </LogInFormContatiner>
    </LogInContatiner>
  );
};
export default SignInPage;