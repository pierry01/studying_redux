import React from 'react';

let state = {
  modules: [
    {
      id: 1, title: 'Iniciando com React', lessons: [
        { id: 1, title: 'Primeira aula' },
        { id: 2, title: 'Segunda aula' }
      ]
    },
    {
      id: 2, title: 'Aprendendo REDUX', lessons: [
        { id: 3, title: 'Terceira aula' },
        { id: 4, title: 'Quarta aula' }
      ]
    }
  ]
}

function Sidebar() {
  const { modules } = state

  return (
    <aside>
      {
        modules.map(module => (
          <div key={module.id}>
            <strong>{module.title}</strong>

            <ul>
              {
                module.lessons.map(lesson => (
                  <li key={lesson.id}>{lesson.title}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </aside>
  )
}

export default Sidebar
