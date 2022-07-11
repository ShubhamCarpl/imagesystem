import React from "react";
import axios from "axios";
import { useState } from "react";
import Table from "./Table";
function Home() {

  const [selectedFile, setSelectedFile] = useState(null);
  const jwt = JSON.parse(localStorage.getItem("jwt") || "");

  const fileUploader = () => {
    console.log("in file upload");
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.Name);
    const apiURL = "";
    axios.post(apiURL, fd).then(()=>{
      console.log("upload success");
    })
    .catch((e) => {
      console.log(e);
    })
  }
  return (
    <div className="Home">
      <div>
      <input type="file" onChange={(event) => {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
      }}/>
      <br/>
      <button onClick={fileUploader} >Upload</button>
      <Table/>
      <br/>
      </div>
      <h1>{jwt.id}</h1>
    </div>
  );
}

export default Home;
