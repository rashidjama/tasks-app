import  { useState } from 'react'

const UseForm = initialVal => {
  const [value, setTask ] = useState(initialVal);
  
  const handleChange = e => {
    setTask(e.target.value);
  }
  const reset = _ => {
    setTask('')
  }
  return [value, handleChange, reset ]
}

export default UseForm