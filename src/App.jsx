import React, { useState } from 'react'
import { Main, Sidebar } from './Components'
import './App.css'

const App = () => {
  const [activeNote, setActiveNote] = useState({})
  const [activeNewNote, setActiveNewNote] = useState(false)
  const [edit, setEdit] = useState(false)
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : [])
  const [searchNotes, setSearchNotes] = useState()

  const handleActiveNote = (data) => {
    if (data.title) {
      setActiveNote(data)
      setActiveNewNote(false)
    } else {
      setActiveNewNote(prevState => !prevState)
      setEdit(false)
    }
  }

  const handleNewNote = ({ newTitle, newDescription }) => {
    const newData = {
      id: Math.floor(Math.random() * Math.floor(9999999999)),
      title: newTitle,
      description: newDescription,
      dateAdd: new Date()
    }
    setNotes(prevNotes => {
      localStorage.setItem('notes', JSON.stringify([...prevNotes, newData]))
      return [
        ...prevNotes,
        newData
      ]
    })
    setSearchNotes(false)
  }

  const handleSearch = (e) => {
    const serchArr = notes.filter((note) => !note.title.search(e.target.value) || !note.description.search(e.target.value))

    if (e.target.value === '') { setSearchNotes(false) } else { setSearchNotes(serchArr) }
  }

  const handleSorting = (e) => {
    const sortingArray = searchNotes || notes
    const sortingResult = sortingArray.slice().sort((a, b) => {
      const dateA = new Date(a.dateAdd)
      const dateB = new Date(b.dateAdd)
      const result = e.target.value === 'downSort' ? (dateB - dateA) : (dateA - dateB)

      return result
    })

    if (searchNotes) {
      setSearchNotes(sortingResult)
    } else {
      setNotes(sortingResult)
    }
  }

  const handleDeleteNote = () => {
    const newArr = notes.filter((note) => note.id !== activeNote.id)

    localStorage.notes = JSON.stringify(newArr)

    if (searchNotes) {
      setSearchNotes(searchNotes.filter((note) => note.id !== activeNote.id))
    }

    setNotes(newArr)
    setActiveNote({})
  }

  const handleEditNote = (data) => {
    const newArr = notes.map((note) => {
      if (note.id === activeNote.id) {
        return {
          ...note,
          title: data.editTitle,
          description: data.editDescription
        }
      }
      return note
    })

    localStorage.setItem('notes', JSON.stringify(newArr))
    setNotes(newArr)
    setEdit(false)
    setActiveNote({})
  }

  return (
    <div className='App'>
      <Sidebar
        setActiveNote={setActiveNote}
        notes={notes}
        handleSorting={handleSorting}
        handleActiveNote={handleActiveNote}
        handleSearch={handleSearch}
        searchNotes={searchNotes}
      />
      <Main
        activeNote={activeNote}
        handleDeleteNote={handleDeleteNote}
        handleNewNote={handleNewNote}
        activeNewNote={activeNewNote}
        handleEditNote={handleEditNote}
        edit={edit}
        setEdit={setEdit}
      />
    </div>
  )
}

export default App
