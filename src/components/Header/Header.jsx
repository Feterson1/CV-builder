import React from 'react'
import './Header.scss'
import propTypes from 'prop-types'

// Icons: 
import {ReactComponent as PrintIcon} from '../../assets/icons/print.svg';



const HeaderComponent = ({onClick}) => {
  return (
    <header className='Header'>
    <div className='ui-container'>
      <div className='Header_content'>
        <span className='Header_logo'>CV builder</span>
        <button className='ui-button isLink' onClick={onClick}>
          <PrintIcon style={{marginRight: '0.6rem'}}/>
          Print
          </button>
      </div>
    </div>
    </header>
  )
}



HeaderComponent.propTypes = {
  onClick: propTypes.func,
}

HeaderComponent.defaultProps = {
  onClick: () => {},
}

export default HeaderComponent