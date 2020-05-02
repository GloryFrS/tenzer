import React from 'react'
import './styles.css'

export default ({
  note,
  style,
  onClick
}) => (
  <div
    {...style}
    onClick={onClick}
    className='noteBlock'
  >
    <h2>{note.title}</h2>
    <p>{note.description}</p>
  </div>
)
