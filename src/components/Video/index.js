import React from 'react'
import { connect } from 'react-redux'

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>Módulo {activeModule.title}</strong><br />
    <span>Aula {activeLesson.title}</span><br /><br />
  </div>
)

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Video)
