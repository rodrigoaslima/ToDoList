import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import Input from '../../assets/components/Input'
import Button from '../../assets/components/Button'

import { Container, SideMenu, Content, TopMenu,  Info, Header } from './styles';
import logoImg from '../../assets/img/logo.png'
import perfilImg from '../../assets/img/foto.png'

interface SignInFormData{
  name: string,
  email: string,
  password: string
}

const Home: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const handleSubmit = () =>{
    console.log('haduken')
  }

  return (
    <Container>
      <SideMenu >
        <TopMenu>
          <Link to = '/sair'>Sair</Link>
        </TopMenu>
        <Info>
          <img style={{width:'60px', height:'60px'}}src={logoImg}/>
          <div>
            <a>Seu Nome</a>
            <a>teste@teste.com</a>
          </div>
        </Info>
      </SideMenu>

      <Content>

        <div>
          <img style={{width:'39px', height:'39px' }}src={perfilImg}/>
          <Link to='/alterar'>alterar foto</Link>
        </div>
        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name="name" placeholder="Nome" />

          <Input name="email" placeholder="E-Mail" />

          <Input name="password" type="password" placeholder="Senha" />

          <Input name="password" type="password" placeholder="Confirme a Senha" />

          <Button type="submit">Editar</Button>

        </Form>
       

      </Content>

    </Container>
  );
}

export default Home;