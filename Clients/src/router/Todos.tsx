import React, { useState , useEffect} from "react";
import styled from "styled-components";
import TodoList from "../components/Todos/TodoList";


const Container = styled.div`

`


const Todos = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  ) 
};

export default Todos;