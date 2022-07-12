import React from "react";
import axios from "axios";
import { useState } from "react";

function Table() {
  const [deleteId, setDeleteId] = useState("");

  const [updateFile, setUpdateFile] = useState(null);
  const deleteImage = (id) => {
    window.alert("delete image " + id);
  }
  const updateImage = (idx) => {
    console.log("update called" + idx);
    console.log(updateFile);
    setDeleteId(idx);
    
  }
  const data = [{
        "State": "Uttar Pradesh",
        "Capital": "Lucknow"
    },
    {
        "State": "Gujarat",
        "Capital": "Gandhinagar"
    },
    {
        "State": "Karnataka",
        "Capital": "Bengaluru"
    },
    {
        "State": "Punjab",
        "Capital": "Chandigarh"
    },
    {
        "State": "Maharashtra",
        "Capital": "Mumbai"
    }]

  const listItems = data.map(
  (element, index) => {
    console.log(index+element.State);
    return (
        <ul>
          <li key = {index+element.State}>
            <p>{element.State}</p>
            <img 
            height="100"
            width="100"
            src="https://miro.medium.com/max/1024/0*4ty0Adbdg4dsVBo3.png"/>
            <input type="file" onChange={(event) =>setUpdateFile(event.target.files[0])}/>
            <button onClick={(e) => {
              e.stopPropagation();
              updateImage(index);
            }}>Update</button>
            <br/>
            <button onClick={(event) => {
            event.stopPropagation();
            deleteImage(index);
          }}>Delete</button>
          </li>
        </ul>
    )
  }
)

    return (
      <div className="Table">
        {listItems}
      </div>
    )
  }
  
export default Table;
