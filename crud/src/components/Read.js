import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BadgeIcon from "@mui/icons-material/Badge";
import NumbersIcon from "@mui/icons-material/Numbers";
import WorkIcon from "@mui/icons-material/Work";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";

const Read = ({ initialDetails, updatedData }) => {
  console.log("initialDetails", initialDetails);

  const history = useHistory();
  const textDetails = {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  };

  const marginLeft = {
    marginLeft: "auto",
  };
  return (
    <div>
      <h2 style={textDetails}>EMPLOYEE DETALIS</h2>
      <div className="App">
        {initialDetails.map((data, index) => {
          return (
            <div>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Employee ID" secondary={data.id} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BadgeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Employee Name" secondary={data.name} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <NumbersIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Employee Age" secondary={data.age} />
                </ListItem>

                <ListItem>
                  <DeleteIcon
                    color="error"
                    onClick={() => {
                      const remainingItem = initialDetails.filter(
                        (item, indx) => {
                          return index !== indx;
                        }
                      );
                      console.log(remainingItem);
                      updatedData(remainingItem);
                    }}
                  />

                  <EditIcon
                    color="success"
                    style={marginLeft}
                    onClick={() => {
                      history.push("/edit-user/" + index);
                    }}
                  />
                </ListItem>
              </List>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Read;
