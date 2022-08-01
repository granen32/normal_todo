import React from 'react';
import styled from 'styled-components';

const TodoListItemBox = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  &:nth-child(even){
    background-color: #f8f9fa;
  }
`;
const CheckBox = styled.input.attrs({
  type: 'checkbox',
})
`
  cursor: pointer;
  display:flex;
  flex:1;
  align-items: center;
  &.checked{
    color:#22b8cf;
  }
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

const TodoListItem = () => {
  return (
    <TodoListItemBox>
      <CheckBox>
        <CheckText>
          할일
        </CheckText>
      </CheckBox>
      <ReMove>
        ⛔️
      </ReMove>
    </TodoListItemBox>
  )
}

export default TodoListItem