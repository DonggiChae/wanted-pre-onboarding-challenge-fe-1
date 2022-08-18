import React, { useState , useEffect} from "react";
import styled from "styled-components";
import { useQuery, useMutation } from '@tanstack/react-query'
import { useNavigate, useParams } from "react-router-dom";

import { AxiosError } from "axios";
import { ITodo, getTodoByIdResponse, ITodoResponseDatas } from "../../API/TodosApi";
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
  const [ todoData , setTodoData] = useState<ITodo | undefined>(undefined)
  const [ stateTodoUpdate , setStateTodoUpdate ] = useRecoilState<boolean>(stateTodoUpdateAtom);
  const onUpdateToggle = () => {
    setStateTodoUpdate((prev) => (!prev));
  }

  const todoDetail = useMutation<ITodo, AxiosError, string, unknown>(
    ((toDoId: string) => getTodoByIdResponse(toDoId)))

  useEffect(() => {
    todoDetail.mutate( props.toDoId , {
      onSuccess: (res) => 
        setTodoData(res)
      });
    }
  ,[props])

  return (
    <Container>
      <Board>
        <UpdateButton onClick={onUpdateToggle}>UPDATE</UpdateButton>
        {stateTodoUpdate ? 
        <Board>
          {todoData ?
          <div>
            <UpdateTodo {...todoData}></UpdateTodo>
            <UpdateButton onClick={onUpdateToggle}>Cancel</UpdateButton> 
          </div>
          : 
          <div></div>}
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