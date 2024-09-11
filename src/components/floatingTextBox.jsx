import React, { useState } from 'react'
import '../styles/floatTextbox.css'

function FloatingTextBox({type,label}) {
  const [text,setText]  = useState('')
  return (
    <form>
        <input type={type} id='text1' className='inputText' onChange={(e) => setText(e.target.value)}
        
        required/>
        <label htmlFor='text1' className={`${text ? 'floating' : ''} textlabel`}>{label}</label>
    </form>
  )
}

export default FloatingTextBox
