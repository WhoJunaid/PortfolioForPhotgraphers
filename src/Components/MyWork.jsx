import React from 'react'
import Stack1view from '../My Work/Stack1view'
import './MyWork.css'
import './MyWork.css'
import Stack2view from '../My Work/Stack2view'
const MyWork = () => {
  return (
    <div className='mywork'>
      <div className="heading">My Work:</div>
        <div className="stacks">
        <Stack1view className='stack1'/>
        <Stack2view className='stack1'/>
        </div>
    </div>
  )
}

export default MyWork
