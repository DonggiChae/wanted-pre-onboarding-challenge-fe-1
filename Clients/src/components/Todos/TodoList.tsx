import React, { useState , useEffect} from "react";
import styled from "styled-components";
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from "react-router-dom";
import { ITodo, ITodoResponseDatas, getTodos} from "../../API/TodosApi";
import TodoDetail from "./TodoDetail";
import CreateTodo from "./CreateTodo";
import DeleteTodo from "./DeleteTodo";

import { constSelector, useRecoilState } from "recoil";
import { todoListAtom, stateCreateTodoAtom, stateTodoDetailAtom } from "../../Atoms/TodosAtoms";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  width: 400px;
  height: 600px;
  background-color: ${(props) => props.theme.backGroundColorDarkGreen};
  color: ${(props) => props.theme.fontColor};
  margin: 20px;
  padding: 30px;
  border-radius: 15px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: black;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
  }
`


const Board = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 500;
`;

const CreateTodoToggleButton = styled.button`

`

interface todotitleProps {
  index: number,
  onClick: any

}

const TodoTitle = styled.div<todotitleProps>`

`;



const TodoList = () => {
  const navigate = useNavigate();
  const { todoID } = useParams();
  const [ toDoDetailId , setToDoDetailId ] = useState("");
  const [ stateDetailAtom, setStateDetailAtom ] = useRecoilState(stateTodoDetailAtom);
  const [ stateTodoListAtom, setStateTodoListAtom ] = useRecoilState(todoListAtom);
  const [ createTodoAtom, setCreateTodoAtom ] = useRecoilState(stateCreateTodoAtom);
  const  { data: todos , isLoading }  = useQuery<ITodoResponseDatas>(['todo'], getTodos);
  const onTodoClicked = (id: string) => {
    setToDoDetailId(id);
    navigate(id);
  };
  
  const onCreateTodoToggle = () => setCreateTodoAtom((prev) => (!prev));

  useEffect(() => {
    if (todoID){
      setStateDetailAtom(todoID);
    }
  },[navigate, TodoDetail])

  useEffect(() => {
    if (todos){
      setStateTodoListAtom([...todos.data]);
      }
  },[todos])

  return (
    <Container>
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
        <CreateTodoToggleButton onClick={() => onCreateTodoToggle()}>
          <FontAwesomeIcon icon={faPlus} />
        </CreateTodoToggleButton>
        { createTodoAtom ? <CreateTodo></CreateTodo>
        : <></>}
    </Container>

  ) 
};

export default TodoList;