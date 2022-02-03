import React, { useState,useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory,useParams } from "react-router-dom";
import "../App.css";

const EditUser = ({context}) => {
  const style = {
    color: "white",
    background: "black",
    textAlign: "center",
    borderRadius: "5px",
    margin: "2rem 4rem",
  };
  const {initialDetails,updatedDetails} = useContext(context);
  const history = useHistory();
  const {index} = useParams();
  const copyData =initialDetails[index];
  const styles = { color: "white", textAlign: "center", margin: "2rem 4rem" };
  const [id, updatedId] = useState(copyData.adhar_id);
  const [name, updatedName] = useState(copyData.name);
  const [phone, updatedPhone] = useState(copyData.phone);

  return (
    <main>
      <h2 style={styles}> AADHAR CARD DETAILS</h2>
      <div className="create">
        <TextField
          id="outlined-basic"
          value={id}
          label="AADHAR NUMBER"
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
          label="AADHAR NAME"
          variant="outlined"
          color="secondary"
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
          color="secondary"
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
            const updatedData = {
              adhar_id: id,
              name: name,
              phone: phone,
            };
            console.log(updatedData);
             const copyOfInitialDetails  = [...initialDetails];
             copyOfInitialDetails[index] =updatedData;
            updatedDetails(copyOfInitialDetails);
            history.push("/users/")
          }}
        >
          Submit
        </Button>
        <Button style={style} variant="contained">
          Clear
        </Button>
      </p>
    </main>
  );
};

export default EditUser;
