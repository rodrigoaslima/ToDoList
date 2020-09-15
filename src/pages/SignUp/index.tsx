
import React, { useRef } from 'react';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { Link } from 'react-router-dom';

import Input from '../../assets/components/Input'
import Button from '../../assets/components/Button'

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/img/logo.png'



interface SignInFormData{
  name: any
  email: any,
  password: any
}

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null)
  
  const handleSubmit = (data: SignInFormData) => {
    console.log(data)
  }

  return(
      <Container>
          <Background >
            <img style={{width:'170px', height:'170px', marginLeft: '12em'}}src={logoImg}/>
          </Background>
          <Content>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <a>Faça seu Cadastro</a>

              <Input name="name" placeholder="Nome" />

              <Input name="email" placeholder="E-Mail" />

              <Input name="password" type="password" placeholder="Senha" />

              <Input name="password" type="password" placeholder="Confirme a Senha" />

              <Button type="submit">Cadastrar</Button>

              <Link to='\'>Eu já possuo Cadastro</Link>

            </Form>

          </Content>
      </Container>
  );
}

export default SignUp;