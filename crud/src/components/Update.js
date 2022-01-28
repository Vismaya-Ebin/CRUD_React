import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Update({
 
  initialDetails,updateData
  
}) {
  const { index } = useParams();
  const style = {
    color: "white",
    background: "black",
    textAlign: "center",
    borderRadius: "5px",
    margin: "2rem 4rem",
  };
  const styles = { color: "white", textAlign: "center", margin: "2rem 4rem" };
  const selectedUser = initialDetails[index];
   const [id, setId] = useState(selectedUser.id);
  const [name, setName] = useState(selectedUser.name);
  const [age, setAge] = useState(selectedUser.age);
  
  

  return (
    <div>
      <h2 style={styles}>Update Name and Age of Employee {index}</h2>
      <div className="create">
        <TextField
          id="outlined-basic"
          defaultValue={selectedUser.id}
          label="ID"
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e)=>{setId(e.target.value)}}
         
         
        />
        <TextField
          id="outlined-basic"
          defaultValue={selectedUser.name}
          label="NAME"
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e)=>{setName(e.target.value)}}
        
        />
        <TextField
          id="outlined-basic"
          defaultValue={selectedUser.age}
          label="AGE"
          variant="outlined"
          color="secondary"
          onChange={(e)=>{setAge(e.target.value)}}
          fullWidth
         
        />
        <Button
          style={style}
          variant="contained"
          fullWidth
          onClick={()=>{updateData({name:name,age:age,id:id})}}
        >
          Update
        </Button>
      </div>
    </div>
  );
}
