import React from 'react';
import styled from 'styled-components';
import { 
  TodoListProps
 } from '../../@types/global';
import CheckBox from '../component/CheckBox';
import TextBox from '../component/TextBox';
import DeleteTodo from '../component/DeleteTodo';

const TodoListWrap = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eceded;
`;

const Todo = ({
  onClickCheck,
  completed,
  onDelteBtn,
  text,
  id
}: TodoListProps) => {
  return (
    <TodoListWrap>
      <CheckBox checked={completed} onClick={() => onClickCheck(id)}/>
      <TextBox completed={completed}>
        {text}
      </TextBox>
      <DeleteTodo onClick={() => onDelteBtn(id)}/>
    </TodoListWrap>
  )
}

export default Todo