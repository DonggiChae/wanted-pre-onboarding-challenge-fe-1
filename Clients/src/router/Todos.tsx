import React, { useState , useEffect} from "react";
import styled from "styled-components";
import TodoList from "../components/Todos/TodoList";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(231, 246, 242);
  color: black;
`


const Todos = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  ) 
};

export default Todos;