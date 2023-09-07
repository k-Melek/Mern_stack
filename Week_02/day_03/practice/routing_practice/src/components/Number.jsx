import React from 'react'

import { useParams } from 'react-router-dom'

const Number = (params) => {

    const {number} = useParams()

  return (
    <div><h1>The Number is : {number}</h1></div>
  )
}

export default Number