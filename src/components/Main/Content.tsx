import React from 'react'
import { Input } from '..'

interface Props {
  activeNewNote: Boolean,
  edit: () => any,
  handleChange: () => any
  title: string,
  description: string,
  newTitle: string,
  newDescription: string
}

export default ({
  activeNewNote,
  edit,
  title,
  description,
  handleChange,
  newTitle,
  newDescription
}: Props) => {
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
