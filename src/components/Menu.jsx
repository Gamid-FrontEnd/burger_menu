import React from 'react'
import { useSelector } from 'react-redux'
import './all.css'

const Menu = () => {
    const styleActive = useSelector(state => state.menu.styleActive.value)

  return (
    <div className = {styleActive ? 'main_menu' : 'non_main_menu'}>
        <div className='main_menu_obj'>One</div>
        <div className='main_menu_obj'>Two</div>
        <div className='main_menu_obj'>Three</div>
        <div className='main_menu_obj'>Four</div>
        <div className='main_menu_obj'>Five</div>
    </div>
  )
}

export default Menu