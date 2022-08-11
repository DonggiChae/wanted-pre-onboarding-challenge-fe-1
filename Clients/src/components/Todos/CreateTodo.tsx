import React, { useState , useEffect, useCallback} from "react";
import styled from "styled-components";
import axios, {  AxiosError } from 'axios';
import { useQueryClient ,useQuery, useMutation, UseMutationResult} from '@tanstack/react-query'
import { useNavigate, useParams } from "react-router-dom";
import { Todo , TodoInput ,createTodo , ResponseData} from "./TodosApi";

const Container = styled.div`

`


interface todotitleProps {
  index: number,
  toDoId: string,
  onClick: any

}

const TodoForm = styled.form`

`;


const Button = styled.button`

`
const Input = styled.input`
`



const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createTodo(title, content).then((data => {
        console.log(data)
      }))
      setTitle("");
      setContent("");
    },
    [title, content]
  );

  const onChange = (event:any) => {
    const {
      target: { name, value },
    } = event;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  useEffect (() => {
    
  },[title, content]);


  return (
    <Container>
      <TodoForm onSubmit={onSubmit}>
        <Input
        name="title"
        type="title"
        placeholder="title"
        required
        value={title}
        onChange={onChange}
        ></Input>
        <Input
        name="content"
        type="content"
        placeholder="content"
        required
        value={content}
        onChange={onChange}
        ></Input>
        <Button type='submit'>Create</Button>
      </TodoForm>
    </Container>

  ) 
};

export default CreateTodo;