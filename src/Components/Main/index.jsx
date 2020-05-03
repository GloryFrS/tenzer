import React, { useState } from 'react'
import { Button } from '../'
import ButtonsList from './ButtonsList'
import './styles.css'

export default (props) => {
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const { title, description } = props.activeNote
  const {
    handleDeleteNote,
    handleNewNote,
    activeNewNote
  } = props

  const handleChange = (e) => {
    if (e.target.name === 'title') { setNewTitle(e.target.value) }
    if (e.target.name === 'description') { setNewDescription(e.target.value) }
  }

  const buttonsEdit = [
    { 
      title: 'Редактировать',
      options: { disabled: !title && !description }
    },
    { 
      title: 'Удалить',
      options: {
        disabled: !title && !description,
        onClick: handleDeleteNote
      }
    }
  ]

  return (
    <div className='main'>
      <div className='main_buttons'>
        <ButtonsList config={title && description ? buttonsEdit : []} />
      </div>
      <div className='main_content'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {activeNewNote ? (
        <div>
          <form onSubmit={() => handleNewNote({ newTitle, newDescription })}>
            <input
              placeholder='title'
              type='text'
              name='title'
              onChange={handleChange}
              value={newTitle}
            />
            <input
              placeholder='description'
              type='text'
              name='description'
              onChange={handleChange}
              value={newDescription}
            />
            <Button type='submit'>ok</Button>
          </form>
        </div>
      ) : null}
    </div>
  )
}
