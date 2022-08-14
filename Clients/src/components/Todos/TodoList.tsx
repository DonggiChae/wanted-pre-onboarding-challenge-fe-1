import React, { useState , useEffect} from "react";
import styled from "styled-components";
import fs from "fs/promises";
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from "react-router-dom";
import { Todo, ResponseDatas, getTodos, getTodoById } from "../../API/TodosApi";
import TodoDetail from "./TodoDetail";
import CreateTodo from "./CreateTodo";
import DeleteTodo from "./DeleteTodo";

import { constSelector, useRecoilState } from "recoil";
import { todoListAtom } from "../../Atoms";



const Container = styled.div`

`


const Board = styled.div`

`;

const CreateTodoToggleButton = styled.button`

`

interface todotitleProps {
  index: number,
  onClick: any

}

const TodoTitle = styled.div<todotitleProps>`

`;
const Button = styled.button`
`



const TodoList = () => {
  const navigate = useNavigate();
  const { todoID } = useParams();
  const [ createTodo, setCreateTodo] = useState(true)
  const [ toDoDetailId , setToDoDetailId ] = useState("");
  const [ stateTodoListAtom, setStateTodoListAtom ] = useRecoilState(todoListAtom);
  const  { data: todos , isLoading }  = useQuery<ResponseDatas>(['todo'], getTodos);
  const onTodoClicked = (id: string) => {
    setToDoDetailId(id);
    navigate(id);
  };
  
  const onCreateTodoToggle = () => setCreateTodo((prev) => (!prev));

  useEffect(() => {
    if (todoID){
      setToDoDetailId(todoID);
    }
  },[navigate, TodoDetail])

  useEffect(() => {
    if (todos){
      setStateTodoListAtom([...todos.data]);
      }
  },[todos])

  return (
    <Container>
      <Button onClick={ () => navigate(-1)}>Go 1 pages back</Button>
      <Button onClick={ () => navigate(1) }>Go 1 Page forward</Button>
      <Board>
          {isLoading ? <Board></Board> 
          : stateTodoListAtom.map((toDo, index: number ) => (
            <Board> 
              <TodoTitle   
                key={toDo.id}
                index={index}
                onClick={() => onTodoClicked(toDo.id)}
                >
                {toDo.title}
              </TodoTitle>
              <DeleteTodo toDoId={toDo.id}/>
            </Board> 
            
            
          ))
        }
        </Board>
        <Board>
          <CreateTodoToggleButton onClick={() => onCreateTodoToggle()}>+</CreateTodoToggleButton>
          {createTodo ? <></>
          : <CreateTodo></CreateTodo>}
        </Board>
        <Board>
          { toDoDetailId ? <TodoDetail toDoId={toDoDetailId} />
          : <></>}
        </Board>
    </Container>

  ) 
};

export default TodoList;