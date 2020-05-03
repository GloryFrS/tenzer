import React from 'react'
import { Button, SearchInput, NoteList } from '../'
import './styles.css'

export default ({
  setActiveNote,
  notes,
  setNotes,
  handleActiveNewNote
}) => {

  const handleSorting = (e) => {
    const sortingArray = notes.slice().sort((a, b) => {
      const dateA = new Date(a.dateAdd)
      const dateB = new Date(b.dateAdd)
      const result = e.target.value === 'downSort' ? (dateB - dateA) : (dateA - dateB)

      return result
    })

    setNotes(sortingArray)
  }

  return (
    <div className='sidebar'>
      <div className='sidebar_container'>
        <div className='sidebar_button'>
          <Button
            style={{ width: '100%' }}
            onClick={() => handleActiveNewNote((prevState) => !prevState)}
          >
            + заметка
          </Button>
        </div>
        <div>
          <SearchInput />
        </div>
        <div className='sidebar_sort'>
          Сортировать по дате
          <select name='select' onChange={(e) => handleSorting(e)}>
            <option value='upSort'>возрастанию даты</option>
            <option value='downSort'>убыванию даты</option>
          </select>
        </div>
        <NoteList setActiveNote={setActiveNote} data={notes} />
      </div>
    </div>
  )
}
