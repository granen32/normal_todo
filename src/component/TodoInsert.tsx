import React, { useState,useCallback } from 'react';
import styled from 'styled-components'

const TodoInsertForm = styled.form`
  display: flex;
  background: #495057;
  input{
    flex: 1;
    border: 0;
    padding: 0 1rem;
    font-size: 15px;
    line-height: 1.5;
    background: none;
    &::placeholder{
      color: #dee2e6;
    }
  }
  button{
    background: #868e96;
    color: #fff;
    padding: 0 15px;
    font-size: 15px;
    display: flex;
    align-items: center;
    transition: 0.1s background ease-in;
    &:hover{
      background: #adb5bd;
    }
  }
`


const TodoInsert = () => {
  const [value, setValue] = useState("");
  const onChange = (e:React.FormEvent<HTMLInputElement>) =>{
    const newValue = e.currentTarget.value;
    setValue(newValue);
  };
  console.log(value);
  return (
    <TodoInsertForm>
      <input 
      type="text" 
      placeholder='할일을 입력하세요'
      value={value}
      onChange={onChange}
      />
      <button type='submit'>✚</button>
    </TodoInsertForm>
  )
}

export default TodoInsert