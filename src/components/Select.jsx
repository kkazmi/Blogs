import React, {forwardRef, useId} from 'react'

function Select({
    option,
    label,
   
    ClassName,
    ...props
} , ref) {
  const id = useId()
  return (
    <div ClassName="w-full">
       {label && <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-900'></label>} 
         <select 
         id={id}      
         className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${ClassName}`}
         {...props}
         ref={ref}
         >
           {option?.map((opt) => (
             <option key={opt.value} value={opt.value}>
               {opt.label}
             </option>
           ))}
         </select>
      
    </div>
  ) 
}

export default React.forwardRef(Select)
