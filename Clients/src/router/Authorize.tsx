import React, { useState , useEffect} from "react";
import styled from "styled-components";
import AuthForm from "../components/Auth/AuthForm";


const Container = styled.div`

`


const Authorize = () => {
  return (
    <Container>
      <AuthForm />
    </Container>
  ) 
};

export default Authorize;