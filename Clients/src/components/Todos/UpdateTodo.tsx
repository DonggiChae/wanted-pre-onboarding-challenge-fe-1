import React, { useState , useEffect, useCallback} from "react";
import styled from "styled-components";
import { useQueryClient ,useQuery, useMutation} from '@tanstack/react-query'

import { AxiosError } from "axios";
import { ITodo , ITodoUpdateInput , updateTodoResponse, ITodoResponseDatas} from "../../API/TodosApi";
import { stateTodoUpdateAtom , todoListAtom} from "../../Atoms/TodosAtoms";
import { useRecoilState } from "recoil";

const Container = styled.div`
  width: 324px;
  height: 330px;
  background-color: ${(props) => props.theme.backGroundColorDarkGreen};
  display: block;
  border-radius: 15px;

`

const Button = styled.button`
  font-weight: 300;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  width: 340px;
  margin-top: 20px;
  border-radius: 3px;
`
interface todotitleProps {
  index: number,
  toDoId: string,
  onClick: any

}

const TodoForm = styled.form`

`;


const TodoTitleInput = styled.input`
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #999;
  color: white;
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  width: 100%;
`
const TodoContentTextarea = styled.textarea`
  resize: none;
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #999;
  color: white;
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  width: 100%;
  height: 350px;
`



const UpdateTodo = (props: ITodo) => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState(`${props.title}`);
  const [content, setContent] = useState(`${props.content}`);
  const [ stateTodoUpdate , setStateTodoUpdate ] = useRecoilState<boolean>(stateTodoUpdateAtom);
  const [ stateTodoListAtom, setStateTodoListAtom ] = useRecoilState(todoListAtom);

  const onUpdateToggle = () => {
    setStateTodoUpdate((prev) => (!prev));
  }

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
        <TodoTitleInput
        name="title"
        type="title"
        placeholder="title"
        required
        value={title}
        onChange={onChange}
        ></TodoTitleInput>
        <TodoContentTextarea
        name="content"
        placeholder="content"
        required
        value={content}
        onChange={onChange}
        ></TodoContentTextarea>
        <Button type='submit'>Save</Button>
        <Button onClick={onUpdateToggle}>Cancel</Button>
      </TodoForm>
    </Container>

  ) 
};

export default UpdateTodo;