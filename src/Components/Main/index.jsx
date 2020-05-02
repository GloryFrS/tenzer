import React from 'react'
import { Button } from '../'
import './styles.css'

export default (props) => {
  const { title, description } = props.activeNote
  const { handleDeleteNote } = props
  return (
    <div className='main'>
      <div className='main_buttons'>
        <Button
          disabled={!title && !description}
        >
          Редактировать
        </Button>
        <Button
          disabled={!title && !description}
          onClick={handleDeleteNote}
        >
          Удалить
        </Button>
      </div>
      <div className='main_content'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
