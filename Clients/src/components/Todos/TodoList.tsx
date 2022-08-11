import React, { useState , useEffect} from "react";
import styled from "styled-components";
import fs from "fs/promises";
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from "react-router-dom";
import { Todo, ResponseDatas, getTodos, getTodoById } from "./TodosApi";
import TodoDetail from "./TodoDetail";
import CreateTodo from "./CreateTodo";
import DeleteTodo from "./DeleteTodo";



const Container = styled.div`

`


const Board = styled.div`

`;

const CreateTodoToggleButton = styled.button`

`

interface todotitleProps {
  index: number,
  toDoId: string,
  onClick: any

}

const TodoTitle = styled.div<todotitleProps>`

`;



const TodoList = () => {
  const navigate = useNavigate();
  const [ createTodo, setCreateTodo] = useState(true)
  const [ toDoDetailId , setToDoDetailId ] = useState("");
  const  { data: todos , isLoading }  = useQuery<ResponseDatas>(['todo'], getTodos);
  const onTodoClicked = (id: string) => {
    setToDoDetailId(id);
    navigate(`/todos/${id}`);
  };
  
  const onCreateTodoToggle = () => setCreateTodo((prev) => (!prev));
  const { index: todoIndex } = useParams();

  return (
    <Container>
      <Board>
          {isLoading ? <Board></Board> 
          : todos?.data.map((toDo, index: number ) => (
            <TodoTitle   
            key={toDo.id}
            index={index}
            toDoId={toDo.id}
            onClick={() => onTodoClicked(toDo.id)}
            >
              {toDo.title}
              <DeleteTodo toDoId={toDo.id}/>
            </TodoTitle>
            
          ))
        }
        </Board>
        <Board>
          <CreateTodoToggleButton onClick={() => onCreateTodoToggle()}>+</CreateTodoToggleButton>
          {createTodo ? <></>
          : <CreateTodo></CreateTodo>}
        </Board>
        <Board>
          {toDoDetailId ? <TodoDetail toDoId={toDoDetailId} />
          : <></>}
        </Board>
    </Container>

  ) 
};

export default TodoList;