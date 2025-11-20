import React, { use } from 'react'
import { useSelector } from 'react-redux'
const todo = () => {

 const todo = useSelector((state) => state.todo);
  return (
    <div>
      <h3>Todos</h3>
    </div>
  )
}

export default todo
