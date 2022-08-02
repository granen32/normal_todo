import React from 'react'
import styled from 'styled-components';
import { 
  TextProps 
} from '../../@types/global/index';
const TextBoxWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap; 
  padding: 10px;
`
const TextBox = ({completed, children}:TextProps) => {
  return (
    <>
      <TextBoxWrap className={`text ${completed ? 'completedText' : ''}`}>
        {children}
      </TextBoxWrap>
    </>
  )
}

export default TextBox