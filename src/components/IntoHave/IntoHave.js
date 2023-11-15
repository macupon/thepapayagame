import React from 'react'
import './IntoHave.css'
import Vagina from '../Vagina/Vagina'
import Penis from '../Penis/Penis'

export default function IntoHave(propsObj) {

  const {player, prop2change} = propsObj

  return (
    <div>
        <div className='intoHave-div'>
            <Vagina player={player} prop2change={prop2change}/>
            <Penis player={player} prop2change={prop2change}/>
        </div>
    </div>
  )
}
