import React, { useCallback, useRef, useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { AuthContext } from '../../hooks/auth'

import Input from '../../assets/components/Input'
import Button from '../../assets/components/Button'

import { Container, SideMenu, Content, TopMenu,  Info, Menu, Todo } from './styles';
import logoImg from '../../assets/img/logo.png'
import perfilImg from '../../assets/img/foto.png'
import { Api } from '../../utils/firebase';

interface TodoFormData{
  todo: string,
  completed: boolean
}

interface ListInterface{
    todo: string,
    completed: boolean
}

interface StatusInterface{
    completed: any
}


const ToDoList: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { currentUser } = useContext(AuthContext);

  const [listsTodo, setlistsTodo] = useState<ListInterface[]>([])

  useEffect( () => {
    
      Api.database().ref().child('/Lists').on('value', snapshot =>{
        if(snapshot.val()){
            setlistsTodo({...snapshot.val()})
            console.log(snapshot.val())
        } else {
            setlistsTodo([])
        }
    })
    
  },[])

  const handleSubmit = useCallback(async (data : TodoFormData ) => {
    const list = {todo: data.todo, completed: false }
    try {
      await Api.database().ref().child('Lists').push(list)
      
    } catch (error) {
      console.log(error)
    }
  },[])

    const handleComplete = useCallback(async ({completed} : StatusInterface) => {
        try{
            await Api.database().ref().child('Lists').update(false)
        } catch(error){
            console.log(error)
        }
    },[])

  return (
    <Container>
      <SideMenu >
        <TopMenu>
          <a onClick={()=>Api.auth().signOut()}>Sair</a>
        </TopMenu>
        
        <Menu>
          <Link to={'/Home'}>Dados Pessoais</Link>
          <Link to={'/Todolist'}>To do List</Link>
        </Menu>
      </SideMenu>

      <Content>

          <h3>Lista de Tarefas</h3>
                {Object.keys(listsTodo).map((id:any)=>(
                    listsTodo[id].completed == false ? 
                    <Todo>
                        <div onClick={() => handleComplete(listsTodo[id])}></div> 
                        <p>{listsTodo[id].todo}</p> 
                        <a>remover</a>
                    </Todo> :

                    <Todo>
                        <div onClick={() => handleComplete(listsTodo[id])} style={{background: "#14FF14", textDecoration: 'line-through'}}></div> 
                        <p style={{textDecoration: 'line-through'}}>{listsTodo[id].todo}</p> 
                        <a style={{textDecoration: 'line-through'}}>remover</a>
                    </Todo>
                ))}
          <div>
            <Form ref={formRef} onSubmit={handleSubmit}>  
                <Input name="todo" placeholder="Escreva aqui sua tarefa..." />
                <Button type="submit">Salvar</Button>
            </Form>
          </div>

      </Content>

    </Container>
  );
}

export default ToDoList;