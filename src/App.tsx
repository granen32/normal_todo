import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from "./styles/theme";
import GlobalStyle from './styles/GlobalStyle';
import Todo from './pages/Todo';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AppContainer = styled.div`
  width: 500px;
  height: 800px;
  background-color: rgb(255, 241, 253);
  position: relative;
`;
const InputText = styled.input`
  width: 100%;
  height: 50px;
  border: 0.1px solid black;
  font-size: 18px;
  text-align:center;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  &:focus{
    outline: none;
    border: 1px solid black;
  }
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <MainContainer>
        <AppContainer>
          <Todo text='할일 1'/>
          <Todo text='할일 2'/>
          <Todo text='할일 3' completed/>
          <InputText
          placeholder='내용을 입력한 후 엔터'
          />
        </AppContainer>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
