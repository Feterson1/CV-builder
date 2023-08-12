import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

const TitleComponent = ({ size, isUppercase, className, children, ...attrs}) => {

  const classes = classNames(`ui-title-${size}`, className,
  {isUppercase,});

  return (
    <p 
    className={classes} 
    {...attrs}
    contentEditable
    suppressContentEditableWarning
    spellCheck={false}
    >
      {children}
    </p>
  )
}



TitleComponent.propTypes = {
  size: propTypes.oneOf(['1','2','3','4','5']),
  isUppercase: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
}

TitleComponent.defaultProps = {
  size: '1',
  isUppercase: false,
}

export default TitleComponent