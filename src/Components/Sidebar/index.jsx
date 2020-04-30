import React, { useState, useEffect } from 'react'
import { Button, SearchInput, NoteList } from '../'
import './styles.css'

export default () => {
  const initData = localStorage.notes ? JSON.parse(localStorage.notes) : []
  const [notes, setNotes] = useState([
    ...initData
  ])

  useEffect(() => {
    (async () => {
      localStorage.setItem('notes', JSON.stringify(notes))
    })()
  }, [notes])

  const newNote = (data) => {
    data = {
      title: 'title',
      description: 'description',
      dateAdd: new Date()
    }
    setNotes(prevNotes => [
      ...prevNotes,
      data
    ])
  }

  return (
    <div className='sidebar'>
      <div className='sidebar_container'>
        <div className='sidebar_button'>
          <Button
            style={{ width: '100%' }}
            onClick={() => newNote()}
          >
            + заметка
          </Button>
        </div>
        <div>
          <SearchInput />
        </div>
        <div className='sidebar_sort'>
          Сортировать по дате
          <select name='select'>
            <option value='value1'>убыванию даты</option>
            <option value='value2'>возрастанию даты</option>
          </select>
        </div>
        <NoteList data={notes} />
      </div>
    </div>
  )
}
