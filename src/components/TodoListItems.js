import { React, useState } from 'react'
import ListItem from './ListItem';


const TodolistItems = () => {

  // Objetos e variáveis internas do componente
  const itemsArray = []

  // Hooks
  let [chave, setChave] = useState(1)
  const [items, setItems] = useState(itemsArray); //hook para o Array de tarefas
  const [inputNewTask, setInputNewTask] = useState('')  //hook para o input de entrada

  //Função para alterar o valor do Input
  const changeInput = (event) => {
    setInputNewTask(event.target.value)
  }

  //Funcão para adicionar um objeto ao hook "Items", que manipula o estado do
  // Array "itemsArray"
  const addTask = (event) => {
    setItems(old =>   //objetos existentes no hook

      [
        ...old, //Spread - Repete todos objetos atuais do "items"
        { taskTitle: inputNewTask, isCompleted: false, key: chave }
      ]
    )
    setChave(chave += 1)
    event.preventDefault()    //previne a ação default do botão Submit (method ='POST')
    setInputNewTask("")       //Limpa o Hook que manipula o value do input.
  }

  //Função para manipular o valor de "checked" de cada tarefa
  const checkTasks = (evento, item) => {

    setItems(items.map(i => {

      if (i.key === item.key) {
        return {
          ...i,
          isCompleted: evento.target.checked
        }
      }
      return i
    }))
  }


  return (
    <div className='todo-list-container'>
      <form onSubmit={addTask}>

        <input onChange={changeInput}
          name='inputNewTask'
          placeholder='Adicione uma Tarefa'
          type='text' value={inputNewTask}>
        </input>

        <input type='submit' value='Adicionar Tarefa'></input>

      </form>
      <ul>

        {items.map((itemValues, indice) => <ListItem
          check={checkTasks}
          item={itemValues}
          key={indice} />)}
      </ul>

    </div>
  )
}

export default TodolistItems