import React from 'react'
import Button from '../Components/Button'
import Cardtask from '../Components/Cardtask'

function Main() {
  return (
    <>
    <div>Main</div>
    <div className='add-task'>
    <Button name="Add Task" />
    <Cardtask name ="task 1"/>
    </div>
    </>
  )
}

export default Main