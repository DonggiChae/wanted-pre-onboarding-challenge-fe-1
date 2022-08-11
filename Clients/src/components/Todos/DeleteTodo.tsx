import React, { useState , useEffect, useCallback} from "react";
import styled from "styled-components";
import { useQueryClient ,useQuery, useMutation, UseMutationResult} from '@tanstack/react-query'
import { Todo , TodoInput , deleteTodo, ResponseData} from "../../API/TodosApi";

const Container = styled.div`

`

const Button = styled.button`

`


const DeleteTodo = (Id : any) => {
  const queryClient = useQueryClient();

  const onDelete = (e :any) => {
    e.preventDefault()
    deleteTodo( Id.toDoId )
  };


  return (
    <Container>
        <Button onClick={onDelete}>Delete</Button>
    </Container>

  ) 
};

export default DeleteTodo;