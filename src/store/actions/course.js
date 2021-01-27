// Action para setar a aula ativa
export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON', // Qual é a ação que está sendo realizada - ÚNICA NO REDUX
    module,
    lesson
  }
}
