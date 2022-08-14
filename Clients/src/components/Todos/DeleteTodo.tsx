import React, { useState , useEffect, useCallback} from "react";
import styled from "styled-components";
import { useQueryClient ,useQuery, useMutation, UseMutationResult} from '@tanstack/react-query'
import { Todo , TodoInput , deleteTodo, ResponseDatas } from "../../API/TodosApi";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../../Atoms";

const Container = styled.div`

`

const Button = styled.button`

`


const DeleteTodo = (Id : any) => {
  const navigate = useNavigate()
  const { todoID } = useParams();
  const queryClient = useQueryClient();
  const [ stateTodoListAtom, setStateTodoListAtom ] = useRecoilState(todoListAtom);

  const onDelete = (e :any) => {
    e.preventDefault();
    deleteTodo( Id.toDoId );
    setStateTodoListAtom(
      stateTodoListAtom.filter((todo: Todo) => todo.id !== Id.toDoId)
    );
    if (Id.toDoId === todoID) {
      navigate('/todos');
    }
  };


  return (
    <Container>
        <Button onClick={onDelete}>Delete</Button>
    </Container>

  ) 
};

export default DeleteTodo;