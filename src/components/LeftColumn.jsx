import React from 'react'
import VisitorCounter from './VisitorCounter'
import Users from './Users'
import Timer from './Timer'

const LeftColumn = () => {
  return (
    <div className='left-column'>
      <Users/>
      <VisitorCounter/>
      <Timer/>
    </div>
  )
}

export default LeftColumn
