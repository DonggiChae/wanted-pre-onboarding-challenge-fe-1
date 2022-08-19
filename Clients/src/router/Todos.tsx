import React, { useState , useEffect} from "react";
import styled from "styled-components";
import TodoList from "../components/Todos/TodoList";
import TodoDetail from "../components/Todos/TodoDetail";

import { useRecoilState } from "recoil";
import { stateTodoDetailAtom } from "../Atoms/TodosAtoms";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(231, 246, 242);
  color: black;
`

const TododetailContainer = styled.div`
  width: 400px;
  height: 600px;
  background-color: rgba(45, 51, 51, 1);
  color: white;
  margin: 20px;
  padding: 30px;
  border-radius: 15px;
`

const Todos = () => {
  const [ stateDetailAtom, setStateTodoDetailAtom ] = useRecoilState(stateTodoDetailAtom);
  return (
    <Container>
      <TodoList />
      { stateDetailAtom ? <TodoDetail toDoId={stateDetailAtom} />
          : <TododetailContainer></TododetailContainer>}
    </Container>
  ) 
};

export default Todos;