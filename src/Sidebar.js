import React from 'react'

export default function Sidebar(props) {
    const {
        name,
        selectedOption,
        handleOnClick
    } = props
  return (
    <button className={`sidebar-item ${selectedOption ? 'sidebar-item-active' : ''}`} onClick={handleOnClick}>{name}</button>
  )
}
