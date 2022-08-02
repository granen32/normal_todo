import React from 'react';
import styled from 'styled-components';
import {
  CheckBoxProps
} from '../../@types/global/index';

const CheckBoxWrap = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
    &:hover{
      border: 2px solid rgb(0, 221, 0);
    }
    .checkIcon{
      position: absolute;
      font-size: 30px;
      color: rgb(0, 221, 0);
    }
`;


const CheckBox = ({
    checked,
    onClick
}: CheckBoxProps) => {
    return (
        <>
          <CheckBoxWrap onClick={onClick}>
            <div className="checkIcon">
                {checked && "✔︎"}
            </div>
          </CheckBoxWrap>
        </>
    );
}

export default CheckBox;