import React from 'react'
import styled from 'styled-components'
import { TodosProps } from '../../@types/global/index';
import TodoListItem from '../component/TodoListItem';
const TodoListBox = styled.div`
  min-height: 320px;
  max-height: 512px;
  overflow-y: auto;
`;

const TodoList = ({todos}:TodosProps) => {
  return (
    <TodoListBox>
      <TodoListItem todos={todos}/>
    </TodoListBox>
  )
}

export default TodoList