import React from 'react'

export default ({
  activeNewNote,
  handleChange,
  newTitle,
  newDescription
}) => {
  if (activeNewNote) {
    return (
      <div>
        <h1>
          <input
            placeholder='title'
            type='text'
            className='main_content__input'
            name='title'
            onChange={handleChange}
            value={newTitle}
          />
        </h1>
        <p>
          <input
            placeholder='description'
            type='text'
            className='main_content__input'
            name='description'
            onChange={handleChange}
            value={newDescription}
          />
        </p>
      </div>
    )
  } else return null
}
