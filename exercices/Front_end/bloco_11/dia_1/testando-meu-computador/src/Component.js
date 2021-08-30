import React, { Component } from 'react'

const task = (valor) => {
  return <li>{valor}</li>
}

const tarefas = ['Estudar', 'Limpar casa', 'Fazer café', 'Arrumar a cama', 'Fazer almoço'];
const tarefas2 = ['Dormir', 'Jogar', 'Comer linguiça', 'Assistir Netflix', 'Dormir de novo'];

class List extends Component {
  render() {
    return (
    <ol>{ tarefas.map((el) => task(el)) }</ol>
    )
  }
}

class AnotherList extends Component {
  render() {
    return <ol>{ tarefas2.map((el) => task(el))}</ol>
  }
}

// export default List;
export { List, AnotherList };
