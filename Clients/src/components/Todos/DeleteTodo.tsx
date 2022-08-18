import React, { useState , useEffect, useCallback} from "react";
import styled from "styled-components";
import { useQueryClient ,useQuery, useMutation} from '@tanstack/react-query'

import { AxiosError } from "axios";
import { ITodo , deleteTodoResponse, ITodoResponseDatas } from "../../API/TodosApi";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../../Atoms";

const Container = styled.div`

`

const Button = styled.button`

`

interface toDoIdProps {
  toDoId: string,
}

const DeleteTodo = (Id : toDoIdProps) => {
  const navigate = useNavigate()
  const { todoID } = useParams();
  const queryClient = useQueryClient();
  const [ stateTodoListAtom, setStateTodoListAtom ] = useRecoilState(todoListAtom);
  const deleteTodo = useMutation<ITodo, AxiosError, string, unknown>(
    ((Id) => deleteTodoResponse(Id)))

  const onDelete = (e :any) => {
    e.preventDefault();
    if (Id.toDoId === todoID) {
      navigate('/todos');
    }
    deleteTodo.mutate(Id.toDoId, {
      onSuccess: () => {
        setStateTodoListAtom(
          stateTodoListAtom.filter((todo: ITodo) => todo.id !== Id.toDoId)
        );
      }
    })
  };


  return (
    <Container>
        <Button onClick={onDelete}>Delete</Button>
    </Container>

  ) 
};

export default DeleteTodo;