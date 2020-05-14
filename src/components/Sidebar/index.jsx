import React from 'react'
import {
  Button,
  SearchBar,
  NoteList
} from '../'
import './styles.css'

export default ({
  notes,
  handleActiveNote,
  handleSearch,
  searchNotes,
  handleSorting
}) => {
  return (
    <div className='sidebar'>
      <div className='sidebar_container'>
        <div className='sidebar_button'>
          <Button
            style={{ width: '100%' }}
            onClick={handleActiveNote}
          >
            + заметка
          </Button>
        </div>
        <div>
          <SearchBar
            onChange={handleSearch}
            placeholder='Поиск'
          />
        </div>
        <div className='sidebar_sort'>
          Сортировать по дате
          <select name='select' onChange={(e) => handleSorting(e)}>
            <option value='upSort'>возрастанию даты</option>
            <option value='downSort'>убыванию даты</option>
          </select>
        </div>
        <NoteList
          handleActiveNote={handleActiveNote}
          notes={notes}
          searchNotes={searchNotes}
        />
      </div>
    </div>
  )
}
