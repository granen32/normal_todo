import React from 'react'
import styled from 'styled-components'
import { InputBoxProps } from '../../@types/global';
const InputText = styled.input`
  width: 100%;
  height: 50px;
  border: 0.1px solid black;
  font-size: 18px;
  text-align:center;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  &:focus{
    outline: none;
    border: 1px solid black;
  }
`;
const InputBox = ({
  onChange,
  onKeyDown,
  inputText
}:InputBoxProps) => {
  return (
    <>
      <InputText 
      type="text"
      placeholder='내용을 입력한 후 엔터'
      onChange={e => onChange(e)}
      onKeyDown={e =>onKeyDown(e)}
      value={inputText}
      />
    </>
  )
}

export default InputBox