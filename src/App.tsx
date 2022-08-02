import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from "./styles/theme";
import GlobalStyle from './styles/GlobalStyle';
import TodoList from './pages/TodoList';

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


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <MainContainer>
        <AppContainer>
          <TodoList />
        </AppContainer>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
