import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import "../App.css";

const Create = ({
  context
  
 
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
  const [id, updatedId] = useState("");
  const [name, updatedName] = useState("");
  const [phone, updatedPhone] = useState("");
  const {initialDetails,updatedDetails} = useContext(context);
  

  return (
    <main>
      <h2 style={styles}> AADHAR CARD DETAILS</h2>
      <div className="create">
        <TextField
          id="outlined-basic"
          value={id}
          label="AADHAR NUMBER"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) => {
            updatedId(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          value={name}
          label="AADHAR NAME"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) => {
            updatedName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          value={phone}
          label="CONTACT ON AADHAR"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) => {
            updatedPhone(e.target.value);
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
              adhar_id: id,
              name: name,
              phone: phone,
            };
            console.log(newEmpData);

            updatedDetails([...initialDetails, newEmpData]);
            history.push("/users/")
          }}
        >
          Submit
        </Button>
      
      </p>
    </main>
  );
};

export default Create;
