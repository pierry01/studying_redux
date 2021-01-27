import React from 'react'
import Sidebar from './components/Sidebar'
import Video from './components/Video'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  )
}

export default App
