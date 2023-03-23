import React from 'react'

export default function sidebar(props) {
  const {
    min,
    max,
    value,
    handleOnChangeSlider
  } = props

  return (
    <div className="slidecontainer">
      <input type="range" min={min} max={max} value={value} onChange={handleOnChangeSlider} className="slider"/>
    </div>
  )
}
