import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export function Update({ initialDetails, updatedData }) {
  const { index } = useParams();
  const history = useHistory();
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
          value={id}
          label="ID"
          variant="outlined"
          color="secondary"
          fullWidth
          disabled={true}
        />
        <TextField
          id="outlined-basic"
          value={name}
          label="NAME"
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          value={age}
          label="AGE"
          variant="outlined"
          color="secondary"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          fullWidth
        />
        <Button
          style={style}
          variant="contained"
          fullWidth
          onClick={() => {
            const updatedDataEmployeeData = {
              name: name,
              age: age,
              id: selectedUser.id,
            };
            const copyOfInitialData = [...initialDetails];
            copyOfInitialData[index] = updatedDataEmployeeData;

            console.log("11111", updatedDataEmployeeData);
            console.log("22222", copyOfInitialData);
            console.log("22222", typeof updatedData);
            updatedData(copyOfInitialData);
            history.push("/users/");
          }}
        >
          Update
        </Button>
      </div>
    </div>
  );
}
