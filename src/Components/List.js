import React from 'react'
import Line  from './Line'

const List = props => {
  const { options } = props
  console.log(options)
  return (
    <div>
      <h1>Lista de coisas</h1>
      {options.map((card) => <Line option={card.option} image={card.image}></Line>)}
    </div>
  )
}

export default List
