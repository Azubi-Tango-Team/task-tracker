import React, { useState } from "react";
import Button from "../Components/Button";
import Cardtask from "../Components/Cardtask";
import Form from "../Components/form";


function Main() {
  const [showForm, setShowForm] = useState(false);

  const handleAddTaskClick = () => {
    setShowForm(true);
  };


  return (
    <div className="container-main">
      <div className="main">
        <div className="container-task">
          <div>
            <p>
              <b>Total task: 3</b>
            </p>
          </div>
          <Button name="Add Task" onClick={handleAddTaskClick} />
        </div>
      
        <div className="container-card-task">
          <Form/>
          <Cardtask name="Go shopping" date="16th october 2023" />
          <Cardtask name="Go to the gym" date="16th october 2023" />
          <Cardtask name="buy groceries" date="16th october 2023" />
        </div>
      </div>
    </div>
  );
}

export default Main;
