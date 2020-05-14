import React, { useState, useEffect } from 'react'
import ButtonsList from './ButtonsList'
import Content from './Content'
import './styles.css'

export default (props) => {
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const { title, description } = props.activeNote
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const {
    handleDeleteNote,
    handleNewNote,
    activeNewNote,
    handleEditNote,
    setEdit,
    edit
  } = props

  useEffect(() => {
    if (title && description) {
      setEditTitle(title)
      setEditDescription(description)
    }
  }, [title, description])

  const handleChange = (e) => {
    if (e.target.name === 'title') { setNewTitle(e.target.value) }
    if (e.target.name === 'description') { setNewDescription(e.target.value) }
    if (e.target.name === 'editTitle') { setEditTitle(e.target.value) }
    if (e.target.name === 'editDescription') { setEditDescription(e.target.value) }
  }

  const buttonsView = [
    {
      title: 'Редактировать',
      options: {
        disabled: !title && !description,
        onClick: () => setEdit(prevState => !prevState)
      }
    },
    {
      title: 'Удалить',
      options: {
        disabled: !title && !description,
        onClick: handleDeleteNote
      }
    }
  ]
  const buttonsSubmit = [{ title: 'Создать заметку', options: { onClick: () => handleNewNote({ newTitle, newDescription }) } }]
  const buttonsEdit = [
    { title: 'Сохранить', options: { onClick: () => handleEditNote({ editTitle, editDescription }) } },
    { title: 'Отмена', options: { onClick: () => setEdit(prevState => !prevState) } }
  ]

  return (
    <div className='main'>
      <div className='main_buttons'>
        <ButtonsList config={activeNewNote ? buttonsSubmit : edit ? buttonsEdit : (title && description) ? buttonsView : []} />
      </div>
      <div className='main_content'>
        <Content
          edit={edit}
          title={editTitle}
          description={editDescription}
          handleChange={handleChange}
          activeNewNote={activeNewNote}
          newTitle={newTitle}
          newDescription={newDescription}
        />
        {!activeNewNote && !edit ? (
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
