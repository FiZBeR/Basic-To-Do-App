import React from 'react'

export const TODOHeroComponent = ({ todos_completed, total_todos }) => {
  return (
    <div className='todohero_section'>
        <div>
            <p className='text_large'>Task Done</p>
            <p className='text_small'>Keep it up</p>
        </div>
        <div>
            <p>{todos_completed}/{total_todos}</p>
        </div>
    </div>
  )
}
