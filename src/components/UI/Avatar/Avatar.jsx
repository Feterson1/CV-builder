import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'



const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  margin-right:4rem;
  border-radius:${(props)=> props.isSquare? '10px': '50%'};
  background-color: #bfbfbf;
`


const AvatarComponent = ({isSquare,onClick}) => {
  return (<Wrapper isSquare={isSquare} onClick={onClick}/>)
}

AvatarComponent.propTypes = {
  isSquare: propTypes.bool,
  width: propTypes.string,
  height: propTypes.string,
}

AvatarComponent.defaultProp ={ 
  isSquare: true, 
}

export default AvatarComponent