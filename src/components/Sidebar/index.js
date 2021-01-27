import React from 'react'
import { connect } from 'react-redux'
import * as CourseActions from '../../store/actions/course'

const Sidebar = ({ modules, toggleLesson }) => ( // dispatch -> Dispara actions para o Redux que serão ouvidas pelos reducers
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>

        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}

              <button
                style={{ marginLeft: 15 }}
                onClick={() => toggleLesson(module, lesson)}
              >
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
)

const mapStateToProps = state => ({
  modules: state.course.modules
})

const mapDispatchToProps = dispatch => ({
  toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
