import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import "../App.css";

const Create = ({
  initialDetails,
  updatedData,
  clearFields,
  id,
  updatedId,
  name,
  updatedName,
  age,
  updatedAge,
}) => {
  const style = {
    color: "white",
    background: "black",
    textAlign: "center",
    borderRadius: "5px",
    margin: "2rem 4rem",
  };
  const history = useHistory();
  const styles = { color: "white", textAlign: "center", margin: "2rem 4rem" };

  return (
    <main>
      <h2 style={styles}>Add Employee Details</h2>
      <div className="create">
        <TextField
          id="outlined-basic"
          value={id}
          label="ID"
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e) => {
            updatedId(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          value={name}
          label="NAME"
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e) => {
            updatedName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          value={age}
          label="AGE"
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e) => {
            updatedAge(e.target.value);
          }}
        />
      </div>
      <p className="App">
        {" "}
        <Button
          style={style}
          variant="contained"
          onClick={() => {
            const newEmpData = {
              id: id,
              name: name,
              age: age,
            };
            console.log(newEmpData);

            updatedData([...initialDetails, newEmpData]);
            history.push("/users/")
          }}
        >
          Submit
        </Button>
        <Button style={style} variant="contained" onClick={clearFields}>
          Clear
        </Button>
      </p>
    </main>
  );
};

export default Create;
