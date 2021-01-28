const INITIAL_STATE = {
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

// Função que retorna o state inicial
export default function course(state = INITIAL_STATE, action) { // state -> antes da alteração && action -> ação a realizar
  switch (action.type) {
    case 'TOGGLE_LESSON':
      return {
        ...state, // copiar o estado que já existe
        activeLesson: action.lesson, // sobrepor com o valor necessário
        activeModule: action.module // sobrepor com o valor necessário
      }
    default:
      return state
  }
}
