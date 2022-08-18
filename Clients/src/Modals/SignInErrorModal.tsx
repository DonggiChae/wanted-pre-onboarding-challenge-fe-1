import styled from "styled-components";

const ErrorModalContainer = styled.div`
  margin-top: 10px;
`

const ErrorContent = styled.div`
  color: red;
`

const SignInErrorModal = (Error: any) => {
  return (
    <ErrorModalContainer>
      <ErrorContent>
        {`${Error.Error.response.data.details}`}
      </ErrorContent>
    </ErrorModalContainer>
  )
    
  
}

export default SignInErrorModal;