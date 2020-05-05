import React from 'react'

export default ({
  edit,
  title,
  description,
  handleChange
}) => {
  if (edit) {
    return (
      <div>
        <h1>
          <input
            placeholder='title'
            type='text'
            className='main_content__input'
            name='editTitle'
            value={title}
            onChange={handleChange}
          />
        </h1>
        <p>
          <input
            placeholder='description'
            type='text'
            className='main_content__input'
            name='editDescription'
            value={description}
            onChange={handleChange}
          />
        </p>
      </div>
    )
  } else return null
}
