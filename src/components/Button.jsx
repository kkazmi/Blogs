import React, { Children } from 'react'

function Button({
    Children,
    type='button',
    bgColor='bg-blue-600',
    textColor= 'text-white',
    className = '',
    ...porps
    }
}) {
  return (
   <button type={type} className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...porps}>
    {Children}
   </button>
  )
}

export default Button
