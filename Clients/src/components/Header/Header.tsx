import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState, useResetRecoilState} from "recoil";
import { stateSignUpAtom, hastokenAtom, } from "../../Atoms/AuthAtoms";
import { stateTodoUpdateAtom, stateTodoDetailAtom, stateCreateTodoAtom} from "../../Atoms/TodosAtoms";


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 20px;
  font-weight: 500;
  padding: 20px 60px;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backGroundColorDarkGreen};
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Todologo = styled.div`
  position: absolute;
  left: 47%;
  font-family: 'Roboto Condensed',sans-serif;
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  justify-content: center;
`
const TodoSignUp = styled.div`
  margin-left: auto;
  padding: 20px 30px;
  cursor: pointer;
`

const TodoSignIn = styled.div`
  margin-left: auto;
  padding: 20px 30px;
  cursor: pointer;
`
const TodoSignOut = styled.div`
  margin-left: auto;
  padding: 20px 30px;
  cursor: pointer;
`


function Header() {
  const [ stateSignUp , setStateSignUP ] = useRecoilState<boolean>(stateSignUpAtom);
  const [ statehastokenAtom, setStatehastokenAtom ] = useRecoilState<boolean>(hastokenAtom);
  const resetTodoUpdate = useResetRecoilState(stateTodoUpdateAtom);
  const resetTodoDetail = useResetRecoilState(stateTodoDetailAtom);
  const resetTodoCreate = useResetRecoilState(stateCreateTodoAtom);
  const navigate = useNavigate();
  const  goTodoHome = () => {
    resetTodoUpdate();
    resetTodoDetail();
    resetTodoCreate();
    navigate("/todos");
  } 
  const onLogOut = () => {
    localStorage.clear();
    setStatehastokenAtom(false);
    navigate("/");
  }
  useEffect (() => {
    if (localStorage.getItem('token')) {
      setStatehastokenAtom(true);
    } else {
      setStatehastokenAtom(false);
      navigate("/");
    }
  },[statehastokenAtom]);
  return (
    <Nav>
      <Col>
      </Col>
      <Todologo onClick={() => goTodoHome()}>
          Todo
      </Todologo>
      {statehastokenAtom ? 
        <Col>
        <TodoSignOut onClick={() => onLogOut()}>
          SignOut
        </TodoSignOut>
        </Col>
        : 
        <Col>
          <TodoSignUp onClick={() => setStateSignUP(true)}>
            SignUp
          </TodoSignUp>
          <TodoSignIn onClick={() => setStateSignUP(false)}>
            SignIn
          </TodoSignIn>
        </Col>}
    </Nav>
  );
}

export default Header;