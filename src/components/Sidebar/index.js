import React from 'react'
import { connect } from 'react-redux'

// Action para setar a aula ativa
function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON', // Qual é a ação que está sendo realizada - ÚNICA NO REDUX
    module,
    lesson
  }
}

const Sidebar = ({ modules, dispatch }) => ( // dispatch -> Dispara actions para o Redux que serão ouvidas pelos reducers
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>

        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}

              <button style={{ marginLeft: 15 }} onClick={() => dispatch(toggleLesson(module, lesson))}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
)

export default connect(state => ({
  modules: state.course.modules
}))(Sidebar)
