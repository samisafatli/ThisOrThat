import React from 'react'
import { Button } from '@material-ui/core';
import './line.css'

const Line = ({option, image}) => {

  const handlerNotCringe = () => console.log('Not Cringe')
  const handlerCringe = () => console.log('Cringe')

  return (
    <div className="box">
      <h3>{option}</h3>
      <div className="image"><img style={{height:'100px'}} src={image} alt="Error"/></div>
      <div className="buttons">
        <Button onClick={handlerCringe} style={{height:'60px'}} variant="contained" color="primary">
          Cringe
        </Button>
        <Button onClick={handlerNotCringe} style={{height:'60px'}} variant="contained" color="secondary">
          Não Cringe
        </Button>
      </div>
    </div>
  )
}

export default Line
