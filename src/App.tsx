import React,{ useState,useRef,useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./styles/theme";
import TodoTemplate from './pages/TodoTemplate';
import GlobalStyle from './styles/GlobalStyle';
import TodoInsert from './component/TodoInsert';
import TodoList from './pages/TodoList';
import { TodosProps } from '../@types/global/index';
function App() {
  const [todos, setTodos] = useState<TodosProps["todos"]>();
  
  
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    </ThemeProvider>
  );
}

export default App;
