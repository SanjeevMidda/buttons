import React from 'react'

function Button({color, letter}) {

    let buttonStyles = {
        backgroundColor: color,
    }

  return (
    <button style={buttonStyles}>{letter}</button>
  )
}

export default Button