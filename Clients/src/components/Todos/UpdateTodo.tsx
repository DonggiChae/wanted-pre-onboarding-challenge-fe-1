import React, { useState , useEffect, useCallback} from "react";
import styled from "styled-components";
import { useQueryClient ,useQuery, useMutation} from '@tanstack/react-query'

import { AxiosError } from "axios";
import { ITodo , ITodoUpdateInput , updateTodoResponse, ITodoResponseDatas} from "../../API/TodosApi";
import { stateTodoUpdateAtom , todoListAtom} from "../../Atoms";
import { useRecoilState } from "recoil";

const Container = styled.div`

`

const Button = styled.button`

`
interface todotitleProps {
  index: number,
  toDoId: string,
  onClick: any

}

const TodoForm = styled.form`

`;


const Input = styled.input`
`



const UpdateTodo = (props: ITodo) => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState(`${props.title}`);
  const [content, setContent] = useState(`${props.content}`);
  const [ stateTodoUpdate , setStateTodoUpdate ] = useRecoilState<boolean>(stateTodoUpdateAtom);
  const [ stateTodoListAtom, setStateTodoListAtom ] = useRecoilState(todoListAtom);
  const updateTodo = useMutation<ITodo, AxiosError, ITodoUpdateInput, unknown>(
    ((createTodoInPut) => updateTodoResponse(createTodoInPut.id, createTodoInPut.title, createTodoInPut.content)))

  const onUpdate = useCallback((event :any) => {
    event.preventDefault()
    updateTodo.mutate({id: props.id, title: title, content: content} , {
      onSuccess: (res) => {
        setStateTodoListAtom( 
              stateTodoListAtom.map((todo) => 
              (todo.id === props.id ? res : todo))
              )
        setStateTodoUpdate(false)
        }
    })
  },[title, content]);

  const onChange = (event: any) => {
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
        <TodoForm onSubmit={onUpdate}>
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
        <Button type='submit'>Save</Button>
      </TodoForm>
    </Container>

  ) 
};

export default UpdateTodo;