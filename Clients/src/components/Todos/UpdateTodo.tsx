import React, { useState , useEffect, useCallback} from "react";
import styled from "styled-components";
import { useQueryClient ,useQuery, useMutation, UseMutationResult} from '@tanstack/react-query'
import { Todo , updateTodo, ResponseDatas} from "../../API/TodosApi";
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



const UpdateTodo = (props: any) => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState(`${props.title}`);
  const [content, setContent] = useState(`${props.content}`);
  const [ stateTodoUpdate , setStateTodoUpdate ] = useRecoilState<boolean>(stateTodoUpdateAtom);
  const [ stateTodoListAtom, setStateTodoListAtom ] = useRecoilState(todoListAtom);
  const onUpdate = (event :any) => {
    event.preventDefault()
    updateTodo(props.id, title, content).then(
      (res) => setStateTodoListAtom( 
          stateTodoListAtom.map((todo) => 
          (todo.id === props.id ? res.data : todo))
          )
      ).then(() => setStateTodoUpdate((prev) => (!prev)))
  };

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