import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Cardtask({ name, date }) {
  return (
    <div className="card-task">
      <div>
      <p>{name}</p> 
      <p>{date}</p>
      </div>
      
      <div><FontAwesomeIcon icon={faTimes} style={{color: 'red', cursor: 'pointer', fontWeight: '200em',padding:'20px'}} size="3x"/></div>
    </div>
  );
}

export default Cardtask;
