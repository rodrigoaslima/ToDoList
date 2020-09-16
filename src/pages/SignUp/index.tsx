
import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { Link } from 'react-router-dom';
import { Api } from '../../utils/firebase'
import { useHistory } from 'react-router-dom'

import Input from '../../assets/components/Input'
import Button from '../../assets/components/Button'

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/img/logo.png'



interface SignInFormData{
  name: string,
  email: string,
  password: string
}

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null)
  const history = useHistory()
  
  const handleSubmit = useCallback(async (data: SignInFormData ) => {
    try {
      await Api.auth().createUserWithEmailAndPassword(data.email, data.password)
      history.push('/Login')

    } catch (error) {
      console.log(error)
      
    }
  },[history])

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

              <Link to='/Login'>Eu já possuo Cadastro</Link>

            </Form>

          </Content>
      </Container>
  );
}

export default SignUp;