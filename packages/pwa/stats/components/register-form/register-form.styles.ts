import styled from 'styled-components';

export const RegisterFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const RegisterFormBox = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
  width: 100%;
`;

export const RegisterFormText = styled.div`
  font-family: Helvetica;
  font-size: 20px;
`;

export const RegisterFormInput = styled.input`
  width: 90%;
  max-width: 500px;
  font-family: Helvetica;
  font-size: 25px;
  padding: 10px 20px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const RegisterFormButton = styled.button`
  border: 0;
  background: #003688;
  border-radius: 10px;
  color: white;
  font-size: 25px;
  padding: 20px 30px;

  &:disabled {
    background: #ddd;
  }
`;
