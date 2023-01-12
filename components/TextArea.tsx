import React from 'react'

interface TextAreaProps {
    id: string
    name: string
    label: string
    placeholder: string
  } 

const TextArea = ({id, name, label, placeholder, ...props}: TextAreaProps) => {
  return (
    <div className='w-full mb-3'>
      <label className='block text-lg' htmlFor={id}>{label}</label>
      <textarea 
        autoComplete='off'
        className='w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-1 focus:ring-purple-500 '
        id={id} 
        name={name}
        rows={5} 
        // style={{resize: 'none'}}
        placeholder={placeholder} 
        {...props} ></textarea>
    </div>
  )
}

export default TextArea
