import React from 'react'

export default function Sidebar(props) {
    const {
        name
    } = props
  return (
    <button className='sidebar-item'>{name}</button>
  )
}
