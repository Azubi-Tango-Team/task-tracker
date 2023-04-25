import React from 'react'
import Button from '../Components/Button'
import Cardtask from '../Components/Cardtask'

function Main() {
  return (
    <div className='container-main'>
    <div className='main'>
        
        <div className='container-task'>
            <div><p>Total task:<Cardtask name ="3"/></p></div>
        <Button name="Add Task" />
        </div>

    
    <Cardtask name ="Task 1"/>
    </div>
    </div>
  )
}

export default Main