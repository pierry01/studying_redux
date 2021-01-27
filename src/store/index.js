import { createStore } from 'redux'

// Função que retorna o state inicial
function reducer() {
  console.log('teste')

  return {
    activeLesson: {},
    activeModule: {},
    modules: [
      {
        id: 1, title: 'Iniciando com React', lessons: [
          { id: 1, title: 'Primeira aula' },
          { id: 2, title: 'Segunda aula' }
        ]
      },
      {
        id: 2, title: 'Aprendendo Redux', lessons: [
          { id: 3, title: 'Terceira aula' },
          { id: 4, title: 'Quarta aula' }
        ]
      }
    ]
  }
}

const store = createStore(reducer)

export default store
