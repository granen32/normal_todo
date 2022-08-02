import React from 'react';
import styled from 'styled-components';

const DeleteBox = styled.div`
  width: 25px;
  height: 25px;
  font-size: 25px;
  cursor: pointer;
  &:hover{
    color: blue;
  }
`;

const DeleteTodo = () => {
  return (
    <DeleteBox>
      🗑
    </DeleteBox>
  )
}

export default DeleteTodo