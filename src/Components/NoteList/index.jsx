import React from 'react'
import { Note } from '../'

export default ({
  notes,
  setActiveNote,
  searchNotes
}) => {
  console.log(searchNotes)

  const activeNotes = searchNotes || notes
  const listNotes = activeNotes.map((note, index) => (
    <Note
      onClick={() => setActiveNote({
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
      {listNotes}
    </>
  )
}
