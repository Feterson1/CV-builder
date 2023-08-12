import React, { useState } from 'react'
import styled from 'styled-components'
import DescriptionComponent from '../Description'



const Wrapper = styled.div`
  display: inline-block;
  width: 33%;
  margin: 0.4rem 0;
`

const Input = styled.input`
  width: 97%;
  height: 6px;
  margin: 0 0.4rem;
  overflow: hidden;
  cursor: pointer;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    background: #ddd;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 40px;
    background: dodgerblue;
    box-shadow: -100vw 0 0 100vw dodgerblue;
    border: 1px solid #999;
  }
`


const RangeComponent = () => {

  const [value,setValue] = useState(90);

  return (
  <Wrapper>
    <DescriptionComponent>Name:{value}</DescriptionComponent>
    <Input value={value} step={10} min={0} max={100} type="range" onChange={(e) => {setValue(e.target.value)}} />
  </Wrapper>)
}



export default RangeComponent