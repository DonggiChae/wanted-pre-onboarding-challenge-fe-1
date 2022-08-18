import React, { useState , useEffect, useCallback} from "react";
import styled from "styled-components";
import { useQueryClient, useMutation } from '@tanstack/react-query'

import { AxiosError } from "axios";
import { createTodoResponse, ITodoResponseDatas , ITodoInput, ITodo } from "../../API/TodosApi";

import { useRecoilState } from "recoil";
import { todoListAtom } from "../../Atoms/TodosAtoms";


const Container = styled.div`

`

const TodoForm = styled.form`

`;


const Button = styled.button`

`
const Input = styled.input`
`



const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [ stateTodoListAtom, setStateTodoListAtom ] = useRecoilState(todoListAtom);
  const queryClient = useQueryClient();

  const createTodo = useMutation<ITodo, AxiosError, ITodoInput, unknown>(
    ((createTodoInPut: ITodoInput) => createTodoResponse(createTodoInPut.title, createTodoInPut.content)))

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      {
        createTodo.mutate({title,content}, {
          onSuccess: (res) => {
            setStateTodoListAtom([...stateTodoListAtom, res]);
          }
        })
      }
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