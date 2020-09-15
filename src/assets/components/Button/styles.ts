import styled from "styled-components";
import { shade } from 'polished'

export const Container = styled.button`
    background: #071AC8;
    border-radius: 20px;
    opacity: 1;
    color: #FFFFFF;
    margin-top: 10px;

    &:hover{
        background: ${shade(0.2, '#071AC8')}
    }
`