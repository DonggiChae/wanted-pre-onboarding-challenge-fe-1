import React, { useState , useEffect, useCallback} from "react";
import styled from "styled-components";
import { useQueryClient, useMutation } from '@tanstack/react-query'

import { AxiosError } from "axios";
import { createTodoResponse, ITodoResponseDatas , ITodoInput, ITodo } from "./API/TodosApi";

import { useRecoilState } from "recoil";
import { todoListAtom, stateCreateTodoAtom } from "./Atoms/TodosAtoms";


const Container = styled.div`
  position: absolute;
  z-index: 3;
  width: 400px;
  height: 330px;
  left: 40%;
  top: 30%;
  background-color: ${(props) => props.theme.backGroundColorDarkGreen};
  padding: 20px;
  display: block;
  border: solid 0.3em;
  border-radius: 15px;
  border-color: white;
`

const TodoForm = styled.form`

`;


const CreateButton = styled.button`
  font-weight: 300;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  width: 100%;
  margin-top: 30px;
  border-radius: 3px;
  
`

const ExitButton = styled.button`
  position: absolute;
  left: 85%;
  font-weight: 300;
  font-size: 1rem;
  width: 25px;
  border-radius: 15px;
`
const Input = styled.input`
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #999;
  color: ${(props) => props.theme.fontColor};
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  width: 100%;

`

const Textarea = styled.textarea`
  resize: none;
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #999;
  color: ${(props) => props.theme.fontColor};
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  width: 100%;
  height: 140px;
`


const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [ stateTodoListAtom, setStateTodoListAtom ] = useRecoilState(todoListAtom);
  const [ createTodoAtom, setCreateTodoAtom ] = useRecoilState(stateCreateTodoAtom);
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

  const onCreateTodoToggle = () => setCreateTodoAtom((prev) => (!prev));

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
      <ExitButton onClick={onCreateTodoToggle}>X</ExitButton>
      <TodoForm onSubmit={onSubmit}>
        <Input
        name="title"
        type="title"
        placeholder="title"
        required
        value={title}
        onChange={onChange}
        ></Input>
        <Textarea
        name="content"
        placeholder="content"
        required
        value={content}
        onChange={onChange}
        ></Textarea>
        <CreateButton type='submit'>Create</CreateButton>
      </TodoForm>
    </Container>

  ) 
};

export default CreateTodo;