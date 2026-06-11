import React from 'react'
import useWindowStore from '../store/window'

const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore();
  return (
    <div id = "window-controls">
      <button className='close' onClick={(e) => { e.stopPropagation(); closeWindow(target); }} />
      <button className='minimize' />
      <button className='maximize' />
    </div>
  )
}

export default WindowControls
