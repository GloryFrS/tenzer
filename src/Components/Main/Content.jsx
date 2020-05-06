import React from 'react'
import { Input } from '../'

export default ({
  activeNewNote,
  edit,
  title,
  description,
  handleChange,
  newTitle,
  newDescription
}) => {
  if (!activeNewNote && !edit) { return null }

  return (
    <div>
      <h1>
        <Input
          placeholder='title'
          type='text'
          className='main_content__input'
          name={activeNewNote ? 'title' : 'editTitle'}
          value={activeNewNote ? newTitle : title}
          onChange={handleChange}
        />
      </h1>
      <p>
        <Input
          placeholder='description'
          type='text'
          className='main_content__input'
          name={activeNewNote ? 'description' : 'editDescription'}
          value={activeNewNote ? newDescription : description}
          onChange={handleChange}
        />
      </p>
    </div>
  )
}
