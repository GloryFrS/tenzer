import React from 'react'
import './styles.css'

export default ({ note, style }) => (
  <div {...style} className='noteBlock'>
    <h2>{note.title}</h2>
    <p>{note.description}</p>
    <p>{note.dateAdd.toString()}</p>
  </div>
)
