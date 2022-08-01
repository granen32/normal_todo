import React from 'react'
import styled from 'styled-components'

const TodoTemplateBox = styled.div`
  width: 512px;
  margin: 60px auto;
  border-radius: 4px;
  overflow: hidden;
`;
const AppTitle = styled.div`
  background: ${props => props.theme.accentColor};
  color:${props => props.theme.textColor};
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background-color: ${props => props.theme.bgColor};;
`

const TodoTemplate = ({children}:any) => {
  return (
    <TodoTemplateBox>
      <AppTitle>일정 관리</AppTitle>
      <Content>{children}</Content>
    </TodoTemplateBox>
  )
}

export default TodoTemplate