import React from 'react'
import { Note } from '../'

export default ({
  notes,
  searchNotes,
  handleActiveNote
}) => {
  const activeNotes = searchNotes || notes
  const listNotes = activeNotes.map((note, index) => (
    <Note
      onClick={() => handleActiveNote({
        id: note.id,
        title: note.title,
        description: note.description
      })}
      note={note}
      key={index}
    />
  ))

  return (
    <>
      <p>{searchNotes && !searchNotes.length ? 'Ничего не найденно' : searchNotes ? 'Результаты поиска' : ''}</p>
      {listNotes}
    </>
  )
}
