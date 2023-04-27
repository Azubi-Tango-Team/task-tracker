import React from "react";
import Button from "../Components/Button";
import Cardtask from "../Components/Cardtask";

function Main() {
  return (
    <div className="container-main">
      <div className="main">
        <div className="container-task">
          <div>
            <p><b>
              Total task: 3 
              </b>
            </p>
          </div>
          <Button name="Add Task" />
        </div>
        <div className="container-card-task">
        <div className="card-container"> <Cardtask name="Task 1" /></div>
        <div className="card-container"> <Cardtask name="Task 2" /></div>
        <div className="card-container"> <Cardtask name="Task 3" /></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
