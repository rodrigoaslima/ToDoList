import styled, { css } from "styled-components";

export const Container = styled.div`
    background: #FFFFFF;
    border: 1px solid #707070;
    padding: 5px;
    width: 100%;
    color: #757575;
    display: flex;

    & + div{
        margin-top: 8px;
    }

    input{
        flex: 1;
        background: transparent;
        border: 0;
        color: #757575;

        &::placeholder{
            color: #757575;
            text-decoration: underline;
        }
    }

`