import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { burg_style } from '../store/menu';
import './all.css'

const Header = () => {
    const dispatch = useDispatch();
    const styleActive = useSelector(state => state.menu.styleActive.value)

  return (
    <div className='header'>
        <div className='burg_menu'>
            <svg className='burg_menu_svg'  onClick={() => {dispatch(burg_style(!styleActive))}}>
                <rect width="40" height="3" className={styleActive ? 'rect_active1' : 'rect_svg'}></rect>
                <rect y="10" width="30" height="3" className={styleActive ? 'rect_active2' : 'rect_svg'}></rect>
                <rect y="20" width="20" height="3" className={styleActive ? 'rect_active3' : 'rect_svg'}></rect>
            </svg>
        </div>
    </div>
  )
}

export default Header