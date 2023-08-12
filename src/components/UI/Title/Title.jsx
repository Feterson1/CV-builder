import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

const TitleComponent = ({ size, isUppercase, isShowButton, className, onClick, children, ...attrs}) => {

  const Wrapper = styled.div`
  margin-bottom: '1rem';
  button {
    display: inline-block;
    transition: 0,1s all ease;
    opacity: 0 !important;
  }
  &:hover button{ 
    opacity: 1 !important;
  }
  p{
    display:inline-block;
    margin-bottom: 0;
  }
  
  `

  const classes = classNames(`ui-title-${size}`, className,
  {isUppercase,});

  return (
    <Wrapper>
    <p 
    className={classes} 
    {...attrs}
    contentEditable
    suppressContentEditableWarning
    spellCheck={false}
    >
      {children}
    </p>
    {isShowButton && ( <button className='ui-button isLink' onClick={onClick}>+</button>)}
   
    </Wrapper>
  )
}



TitleComponent.propTypes = {
  size: propTypes.oneOf(['1','2','3','4','5']),
  isUppercase: propTypes.bool,
  isShowButton: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.string,
  children: propTypes.node,
}

TitleComponent.defaultProps = {
  size: '1',
  isUppercase: false,
  isShowButton: false,
  onClick: () => {},
}

export default TitleComponent