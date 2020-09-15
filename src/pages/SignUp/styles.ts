import styled from "styled-components";
import { shade } from 'polished'

import LogInBackgroundImage from '../../assets/img/bg.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    aling-items: stretch;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 500px;

    form{
        display: flex;
        flex-direction: column;

        a{
            color: #707070;
            margin-bottom: 10px;
            text-align: center;
        }
    }

`

export const Background = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    background: url(${LogInBackgroundImage}) no-repeat center;
    background-size: cover;

`