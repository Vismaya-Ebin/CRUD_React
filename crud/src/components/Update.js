import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Update({
  updatedData,
  initialDetails,editedList, updatedEditedList,
  id,
  updatedId,
  name,
  updatedName,
  age,
  updatedAge,
  handleEditClick
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
  console.log("selectedUser", selectedUser);

  return (
    <div>
      <h2 style={styles}>Edit User {index}</h2>
      <div className="create">
        <TextField
          id="outlined-basic"
          defaultValue={selectedUser.id}
          label="ID"
          variant="outlined"
          color="secondary"
          fullWidth
         
        />
        <TextField
          id="outlined-basic"
          defaultValue={selectedUser.name}
          label="NAME"
          variant="outlined"
          color="secondary"
          fullWidth
          // onChange={(e) => {
          //   updatedName(e.target.value);
          // }}
        />
        <TextField
          id="outlined-basic"
          defaultValue={selectedUser.age}
          label="AGE"
          variant="outlined"
          color="secondary"
          fullWidth
          // onChange={(e) => {
          //   updatedAge(e.target.value);
          // }}
        />
        <Button
          style={style}
          variant="contained"
          fullWidth
          onClick={()=>{updatedEditedList(selectedUser)}}
        >
          Update
        </Button>
      </div>
    </div>
  );
}
