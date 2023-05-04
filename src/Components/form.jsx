import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Date: ${date}, Checkbox: ${isChecked}`);
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='input'> 
        <label htmlFor="name">Task</label>
    </div>
    <div className='input'> 
        <input className='inputtype' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='input'>
        <label htmlFor="date">Day & Time</label>
        </div>
    <div className='input'> 
        <input className='inputtype' type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className='input'>
        <label htmlFor="checkbox">Set Reminder</label>
      
        <input className='checkbox' type="checkbox" id="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      </div>
      <button className='inputtypebtn' type="submit">Save Task</button>
    </form>
  );
}

export default Form;
