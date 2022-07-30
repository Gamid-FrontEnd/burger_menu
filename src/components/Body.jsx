import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { burg_style } from '../store/menu';

const Body = () => {  
  const dispatch = useDispatch();
  const styleActive = useSelector(state => state.menu.styleActive.value);

  return (
    <div className='body' onClick={() => {
        if(styleActive) {
          dispatch(burg_style(false))
        }
      }}>
        Body
    </div>
  )
}

export default Body