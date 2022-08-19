import React, { useState , useEffect} from "react";
import styled from "styled-components";
import { useQuery, useMutation } from '@tanstack/react-query'
import { useNavigate, useParams } from "react-router-dom";

import { AxiosError } from "axios";
import { ITodo, getTodoByIdResponse, ITodoResponseDatas } from "./API/TodosApi";
import UpdateTodo from "./UpdateTodo";
import { stateTodoUpdateAtom, stateTodoDetailAtom } from "./Atoms/TodosAtoms";
import { useRecoilState } from "recoil";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  width: 400px;
  height: 600px;
  background-color: ${(props) => props.theme.backGroundColorDarkGreen};
  color: white;
  margin: 20px;
  padding: 30px;
  border-radius: 15px;
`


const Board = styled.div`

`;



const TodoTitle = styled.div`
  font-size: 1.8rem;
  margin-bottom: 15px;
  margin-top: 10px;
  font-weight: 600;
  height: 50px;
`;

const TodoContent= styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  width: 100%;
  height: 350px;
`;

const TodoCreateAt= styled.div`
padding-top: 3px;
`;

const TodoUpdateAt= styled.div`
  padding-top: 3px;
`;

const UpdateButton = styled.button`
  font-weight: 300;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  width: 100%;
  margin-top: 20px;
  border-radius: 3px;
`;

const ButtonContainer = styled.div`

`
const Button = styled.button`
`


interface tododetailProps {
  toDoId: string,
}



const TodoDetail = (props: tododetailProps) => {
  const navigate = useNavigate();
  const [ todoData , setTodoData] = useState<ITodo | undefined>(undefined)
  const [ stateTodoUpdate , setStateTodoUpdate ] = useRecoilState<boolean>(stateTodoUpdateAtom);
  const [ stateDetailAtom, setStateTodoDetailAtom ] = useRecoilState(stateTodoDetailAtom);
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
  ,[props, stateDetailAtom, stateTodoUpdate])

  return (
    <Container>
      <ButtonContainer >
        <Button onClick={ () => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button onClick={ () => navigate(1) }>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </ButtonContainer>
      <Board>
        {stateTodoUpdate ? 
        <Board>
          {todoData ?
            <UpdateTodo {...todoData}></UpdateTodo>
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
            Created At: {todoData?.createdAt}
          </TodoCreateAt>
          <TodoUpdateAt>
            Last Update: {todoData?.updatedAt}
          </TodoUpdateAt>
          <UpdateButton onClick={onUpdateToggle}>UPDATE</UpdateButton>
        </Board>
        }
      </Board>
    </Container>

  ) 
};

export default TodoDetail;