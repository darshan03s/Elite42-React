import React from 'react'

const Child = (props) => {
  return (
    <div className='Child'>
      This is a child. {props.message}
    </div>
  )
}

export default Child
