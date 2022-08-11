import React, { useState , useEffect} from "react";
import styled from "styled-components";
import AuthForm from "../components/Auth/AuthForm";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2C3333;
`


const Authorize = () => {
  return (
    <Container>
      <AuthForm />
    </Container>
  ) 
};

export default Authorize;