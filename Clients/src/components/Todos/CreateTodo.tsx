import React, { useState , useEffect, useCallback} from "react";
import styled from "styled-components";
import { useQueryClient } from '@tanstack/react-query'
import { createTodo, ResponseDatas } from "../../API/TodosApi";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../../Atoms";


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

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createTodo(title, content).then((res) => 
      setStateTodoListAtom([...stateTodoListAtom, res.data]))
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