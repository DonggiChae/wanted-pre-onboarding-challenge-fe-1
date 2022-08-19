import React, { useState , useEffect} from "react";
import styled from "styled-components";
import SignInPage from "../SignInpages/SignInPage";
import AuthForm from "../SignInpages/SignInPage";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2C3333;
`


const LogInPage = () => {
  return (
    <Container>
      <SignInPage />
    </Container>
  ) 
};

export default LogInPage;