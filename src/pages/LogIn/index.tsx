
import React, { useCallback, useContext, useRef } from 'react';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../hooks/auth'
import {Api} from '../../utils/firebase'


import Input from '../../assets/components/Input'
import Button from '../../assets/components/Button'

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/img/logo.png'


interface LogInFormData{
  email: any,
  password: any
}


const LogIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null)
  const history = useHistory()

  
  const handleSubmit = useCallback(async (data: LogInFormData ) => {
    
    try {
      await Api.auth().signInWithEmailAndPassword(data.email, data.password)
      history.push('/') 
      
    } catch (error) {
      console.log(error)
      
    }
  },[history])

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  } 
  
  return(
      <Container>
          <Background >
            <img style={{width:'170px', height:'170px', marginLeft: '12em'}}src={logoImg}/>
          </Background>
          <Content>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <a>Faça seu login</a>

              <Input name="email" placeholder="E-Mail" />

              <Input name="password" type="password" placeholder="Senha" />

              <Button type="submit">Entrar</Button>

              <Link to='/SignUp'>Não possuo cadastro</Link>

            </Form>

          </Content>
      </Container>
  );
}

export default LogIn;