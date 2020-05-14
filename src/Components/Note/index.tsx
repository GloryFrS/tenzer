import React from 'react'
import { Note } from '../../App'
import './styles.css'

interface NoteComponent {
  note: Note,
  style?: any,
  onClick?: any
}

export default ({
  note,
  style,
  onClick
} : NoteComponent) => (
  <div
    style={style}
    onClick={onClick}
    className='noteBlock'
  >
    <h2>{note.title}</h2>
    <p>{note.description}</p>
  </div>
)
