
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import { Api } from '../../utils/firebase'

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
  
  const handleSubmit = useCallback(async (data: LogInFormData ) => {
    try {
      const user = await Api.auth().signInWithEmailAndPassword(data.email, data.password)
      console.log(user)
      
    } catch (error) {
      console.log(error)
      
    }
  },[])
  
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