import React from 'react';
import styled from 'styled-components';
import { DelteBtn } from '../../@types/global';
const DeleteBox = styled.div`
  width: 25px;
  height: 25px;
  font-size: 25px;
  cursor: pointer;
  &:hover{
    color: blue;
  }
`;

const DeleteTodo = ({
  onClick
}:DelteBtn) => {
  return (
    <DeleteBox onClick={onClick}> 
      🗑
    </DeleteBox>
  )
}

export default DeleteTodo