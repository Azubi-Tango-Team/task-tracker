import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Cardtask({ name, date }) {
  return (
    <div className="card-task">
      <p>{name}</p> 
      <p>{date}</p>
      <div><FontAwesomeIcon icon={faTimes} style={{color: 'red', cursor: 'pointer'}} /></div>
    </div>
  );
}

export default Cardtask;
