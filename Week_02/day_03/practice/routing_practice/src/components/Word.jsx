import React from 'react'

import { useParams } from 'react-router-dom'


const Word = (props) => {

    const {word} = useParams()

  return (
    <div><h1>The Word is : {word}</h1></div>
  )
}

export default Word