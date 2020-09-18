import React, { useCallback, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { AuthContext } from '../../hooks/auth'

import Input from '../../assets/components/Input'
import Button from '../../assets/components/Button'

import { Container, SideMenu, Content, TopMenu,  Info, Menu } from './styles';
import logoImg from '../../assets/img/logo.png'
import perfilImg from '../../assets/img/foto.png'
import { Api } from '../../utils/firebase';

interface PerfilFormData{
  email: string,
  password: string,
  name: string
}


const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { currentUser } = useContext(AuthContext);
  const history = useHistory()
  

  const handleSubmit = useCallback(async (data: PerfilFormData) => {
    try {
        await Api.auth().currentUser?.updateProfile({
          displayName: data.name
        })
        try{
          await Api.auth().currentUser?.updateEmail(data.email)
          try{
            await Api.auth().currentUser?.updatePassword(data.password)
          }catch(error){
            console.log(error)
          }
        } catch(error){
          console.log(error)
        }
    } catch (error) {
      console.log(error)
    }
    try{
      await Api.auth().signOut()
      history.push('/')
    }catch(error){
      console.log(error)
    }
  },[history])

  return (
    <Container>
      <SideMenu >
        <TopMenu>
          <a onClick={()=>Api.auth().signOut()}>Sair</a>
        </TopMenu>
        <Info>
          {
            currentUser.photoURL == null ? <img style={{width:'60px', height:'60px'}}src={logoImg}/> : 
            <img style={{width:'60px', height:'60px'}}src={currentUser.photoURL}/>
          }
          <div>
            <a>{currentUser.displayName}</a>
            <a>{currentUser.email}</a>
          </div>
        </Info>
        <Menu>
          <Link to={'/Home'}>Dados Pessoais</Link>
          <Link to={'/Todolist'}>To do List</Link>
        </Menu>
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