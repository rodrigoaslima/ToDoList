import styled from "styled-components";

import LogInBackgroundImage from '../../assets/img/bg.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    aling-items: stretch;
`
export const Header = styled.div`
    
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-left: 20px;
    margin-right: 20px;

    place-content: center;

    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    form{
        display: flex;
        flex-direction: column;

        a{
            color: #707070;
            margin-bottom: 10px;
            text-align: center;
            cursor: pointer;
        }

        Button{
            width: 24%;
        }

    }

`

export const TopMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    a{
        text-decoration: none;
        font-size: 15px;
        color: #ffffff;
        letter-spacing: 0px;
        opacity: 1;
        font-style: italic;
        cursor: pointer;
    }
`

export const Info = styled.div`
    display: flex;
    
    div{
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        a{
            color: #FFFFFF;
        }
        >a{
            font-size: 15px;
            font-style: italic;
        }
    }
`

export const SideMenu = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 15em;
    max-width: 15em;
    padding-left: 25px;
    padding-right: 15px;

   

    background: url(${LogInBackgroundImage}) no-repeat center;
    background-size: cover;

`

export const Menu = styled.div`

    display:flex;
    flex-direction: column;
    margin-top: 75px;
    a{
        padding-bottom: 10px;
        text-decoration: none;
        color: #FFFFFF;
    }

`

export const Todo = styled.span`
    display: flex;
    div{
        border: 1px solid;
        width: 15px;
        height: 15px;
        margin-bottom: 0px;
        align-self: center;
    }
    p{
        margin-left: 10px;
        margin-right: 10px;
    }
`
