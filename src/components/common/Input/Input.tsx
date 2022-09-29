import React from 'react'
import { IInput } from 'types/IInput'

const Input: React.FC<IInput> = React.memo((props) => {
  const { type, onChange, placeholder } = props
  return <input type={type} onChange={onChange} placeholder={placeholder} />
})

export default Input
