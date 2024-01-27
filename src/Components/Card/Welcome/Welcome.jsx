import React from 'react'

function Welcome() {
    const body_style={
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily: "'Bangers', system-ui",
        fontSize:'5em'
    }
  return (
    <div style={body_style}>Hi ! Welcome to my world.</div>
  )
}

export default Welcome