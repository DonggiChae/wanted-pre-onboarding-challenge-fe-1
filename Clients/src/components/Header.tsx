import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { stateSignUpAtom } from "../Atoms";


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
  color: white;
  background-color: rgba(0, 0, 0, 1);
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


function Header() {
  const [ stateSignUp , setStateSignUP ] = useRecoilState<boolean>(stateSignUpAtom)
  return (
    <Nav>
      <Col>
      </Col>
      <Todologo>
          Todo
      </Todologo>
      <Col>
        <TodoSignUp onClick={() => setStateSignUP(true)}>
          SignUp
        </TodoSignUp>
        <TodoSignIn onClick={() => setStateSignUP(false)}>
          SignIn
        </TodoSignIn>
      </Col>
    </Nav>
  );
}

export default Header;