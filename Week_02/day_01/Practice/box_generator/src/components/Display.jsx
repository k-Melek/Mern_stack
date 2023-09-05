import React from 'react'
import './test_css.css'

const Display = ({colors}) => {
  return (
    <fieldset>
        <legend>Display Colors</legend>
        <div className="box-container">
        {colors.map((test, idx) => (
        <div
            key={idx}
            className="color-box"
            style={{ 
                    backgroundColor: test.chooseColor ,
                    height: test.chooseHeight,
                    width: test.chooseWidth}}
        ></div>
        ))}
      </div>
    </fieldset>
  )
}

export default Display