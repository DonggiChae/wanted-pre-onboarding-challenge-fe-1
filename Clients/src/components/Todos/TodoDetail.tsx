import React, { useState , useEffect} from "react";
import styled from "styled-components";
import { useQuery } from '@tanstack/react-query'
import { Todo, getTodoById,ResponseData } from "../../API/TodosApi";
import UpdateTodo from "./UpdateTodo";


const Container = styled.div`

`


const Board = styled.div`

`;



const TodoTitle = styled.div`

`;

const TodoContent= styled.div`

`;
const TodoCreateAt= styled.div`

`;

const TodoUpdateAt= styled.div`

`;

const UpdateButton = styled.button`

`;



const TodoDetail = (props: any) => {
  const [todoData , setTodoData] = useState<Todo | undefined>(undefined)
  const [updateToggle, setUpdateToggle] = useState(false)
  useEffect(() => {
    getTodoById(props.toDoId).then((res)=>
    setTodoData(res.data));
  },[props.toDoId])
  const onUpdateToggle = () => {
    setUpdateToggle((prev) => (!prev));
  }
  return (
    <Container>
      <Board>
        <UpdateButton onClick={onUpdateToggle}>UPDATE</UpdateButton>
        {updateToggle ? <UpdateTodo {...todoData}></UpdateTodo>: 
        <Board>
          <TodoTitle>
            {todoData?.title}
          </TodoTitle>
          <TodoContent>
            {todoData?.content}
          </TodoContent>
          <TodoCreateAt>
            {todoData?.createdAt}
          </TodoCreateAt>
          <TodoUpdateAt>
            {todoData?.updatedAt}
          </TodoUpdateAt>
        </Board>
        }
      </Board>
    </Container>

  ) 
};

export default TodoDetail;