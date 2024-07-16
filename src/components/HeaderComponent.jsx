import React from 'react';
import list from '../assets/list.png';

export const HeaderComponent = () => {
  return (
    <header>
      <img src={list} className='imagen-header'/>
      <h1>TODO</h1>
    </header>
  )
}
