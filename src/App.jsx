import React, { useState } from 'react'
import { Main, Sidebar } from './Components'
import './App.css'

const App = () => {
  const [activeNote, setActiveNote] = useState({})
  const [activeNewNote, setActiveNewNote] = useState(false)
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : [])
  const [searchNotes, setSearchNotes] = useState()

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

    if (e.target.value === '') {
      setSearchNotes(false)
    }

    setSearchNotes(serchArr)
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

  return (
    <div className='App'>
      <Sidebar
        setActiveNote={setActiveNote}
        notes={notes}
        handleSorting={handleSorting}
        handleActiveNewNote={setActiveNewNote}
        handleSearch={handleSearch}
        searchNotes={searchNotes}
        setSearchNotes={setSearchNotes}
      />
      <Main
        activeNote={activeNote}
        handleDeleteNote={handleDeleteNote}
        handleNewNote={handleNewNote}
        activeNewNote={activeNewNote}
      />
    </div>
  )
}

export default App
