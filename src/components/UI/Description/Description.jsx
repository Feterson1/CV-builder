import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

const DescriptionComponent = ({ isPrimary, isSecondary, className, children, ...attrs}) => {


  const classes = classNames('ui-text', className,{
    isPrimary,
    isSecondary,
  })



  return (
    <p 
    className={classes} 
    {...attrs}
    contentEditable
    suppressContentEditableWarning
    spellCheck={false}
    >{children}</p>
  )
}



DescriptionComponent.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
}

DescriptionComponent.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  className: '',
  children: null,
}

export default DescriptionComponent