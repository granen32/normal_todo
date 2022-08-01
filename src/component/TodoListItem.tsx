import React from 'react';
import styled from 'styled-components';
import { TodosProps } from '../../@types/global/index';
const TodoListItemBox = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  &:nth-child(even){
    background-color: #f8f9fa;
  }
`;
const CheckBoxContaianer = styled.div`
  display: flex;
  align-items: center;
  & > label{
    display: inline-block;
    line-height: 16px;
    margin-left: -4px;
  }
`;
const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 16px;
  height: 16px;
  display: inline-block;
  cursor: pointer;
`;

const CheckText = styled.p`
  margin-left:10px;
  flex:1;
`;

const ReMove = styled.div`
  display: flex;
  align-items: center;
  font-size:16px;
  color:#ff6b6b;
  cursor:pointer;
  &:hover{
    color:#ff8787;
  }
  &+& {
    border-top: 1px solid #dee2e6;
  }
`;

const TodoListItem = ({todos}:TodosProps) => {
  const {text, checked} = todos;
  return (
    <TodoListItemBox>
      <CheckBoxContaianer>
        {checked ? <CheckBox /> : <CheckBox />}
      </CheckBoxContaianer>
      <CheckText>
          {text}
      </CheckText>
      <ReMove>
        ⛔️
      </ReMove>
    </TodoListItemBox>
  )
}

export default TodoListItem