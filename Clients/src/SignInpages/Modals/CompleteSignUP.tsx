import styled from "styled-components";

const SignUpModalContainer = styled.div`
  margin-top: 10px;
`

const SignUpContent = styled.div`
  color: black;
`

const CompleteSignUp = (message: any) => {
  console.log(message)
  return (
    <SignUpModalContainer>
      <SignUpContent>
        {`${message.Error}`}
      </SignUpContent>
    </SignUpModalContainer>
  )
    
  
}

export default CompleteSignUp;