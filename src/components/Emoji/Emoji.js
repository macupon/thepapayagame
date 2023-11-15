import React from 'react'
import './Emoji.css';


export default function Emoji(props) {

  return (
    <div className='emoji-div'>
      {props.emoji}
    </div>
  )
}
