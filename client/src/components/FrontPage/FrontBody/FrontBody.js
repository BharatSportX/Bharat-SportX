import React from 'react'
import BodyCard from './BodyCard'
import BodyQN from './BodyQN'

const FrontBody = () => {
  return (
    <>
    
       <BodyCard paragraphorder="1" imgorder="2" img="https://source.unsplash.com/random/500x450/?football"/>
      <BodyCard paragraphorder="2" imgorder="1" img="https://source.unsplash.com/random/500x450/?cricket"/>
      <BodyCard paragraphorder="1" imgorder="2" img="https://source.unsplash.com/random/500x450/?chess"/>
      <BodyCard paragraphorder="2" imgorder="1" img="https://source.unsplash.com/random/500x450/?basketball"/>
      <BodyQN/>
    </>
  )
}

export default FrontBody
