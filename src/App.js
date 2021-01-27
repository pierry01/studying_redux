import Sidebar from './components/Sidebar'
import Video from './components/Video'

function App() {
  let state = {
    activeLesson: {},
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

  return (
    <div className="App">
      <Video activeLesson={state.activeLesson} />
      <Sidebar modules={state.modules} />
    </div>
  )
}

export default App
