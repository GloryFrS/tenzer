import React from 'react'
import { Note } from '../'

export default ({ data, setActiveNote }) => {
  const listNotes = data.map((note, index) => (
    <Note
      onClick={() => setActiveNote({
        title: note.title,
        description: note.description,
        index
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
