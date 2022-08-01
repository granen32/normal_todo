import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./styles/theme";
import TodoTemplate from './pages/TodoTemplate';
import GlobalStyle from './styles/GlobalStyle';
import TodoInsert from './component/TodoInsert';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert/>
      </TodoTemplate>
    </ThemeProvider>
  );
}

export default App;
