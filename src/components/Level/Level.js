import React from 'react';
import './Level.css';

export default function Level(props) {


  return (
    <div>
        <button className='btn-level'>{'🌶️'.repeat(props.level)}</button>
    </div>
  )
}
