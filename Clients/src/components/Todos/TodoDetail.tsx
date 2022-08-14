import React, { useState , useEffect} from "react";
import styled from "styled-components";
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from "react-router-dom";
import { Todo, getTodoById, ResponseDatas } from "../../API/TodosApi";
import UpdateTodo from "./UpdateTodo";
import { stateTodoUpdateAtom } from "../../Atoms";
import { useRecoilState } from "recoil";

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

interface tododetailProps {
  toDoId: string,
}



const TodoDetail = (props: tododetailProps) => {
  const [ todoData , setTodoData] = useState<Todo | undefined>(undefined)
  const [ stateTodoUpdate , setStateTodoUpdate ] = useRecoilState<boolean>(stateTodoUpdateAtom);
  useEffect(() => {
      getTodoById(props.toDoId).then((res)=>
      setTodoData(res.data));
  },[props])
  const onUpdateToggle = () => {
    setStateTodoUpdate((prev) => (!prev));
  }
  return (
    <Container>
      <Board>
        <UpdateButton onClick={onUpdateToggle}>UPDATE</UpdateButton>
        {stateTodoUpdate ? 
        <Board>
          <UpdateTodo {...todoData}></UpdateTodo>
          <UpdateButton onClick={onUpdateToggle}>Cancel</UpdateButton>
        </Board>
        : 
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