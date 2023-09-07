import React from 'react'
import { useParams } from 'react-router-dom'


const WordAndColor = (props) => {

    const { word, colorOne, colorTwo } = useParams();

    const testStyle = {
        color: colorOne,
        backgroundColor: colorTwo,
    };

    return (
        <div style={testStyle}><h2>{word}</h2></div>
    )
}

export default WordAndColor