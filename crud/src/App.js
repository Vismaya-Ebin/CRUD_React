import "./App.css";
import Create from "./components/Create.js";
import Read from "./components/Read.js";
import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Notfound from "./components/Notfound";
import { Welcome } from "./components/Welcome";
import { Update } from "./components/Update.js";

function App() {
  const initialData = [
    {
      id: "1544390",
      name: "Vismaya",
      age: "30",
    },
    {
      id: "1544391",
      name: "Neethu",
      age: "33",
    },
    {
      id: "1544392",
      name: "Susmitha",
      age: "13",
    },
  ];

  const [initialDetails, updatedData] = useState(initialData);

  const [id, updatedId] = useState("");
  const [name, updatedName] = useState("");
  const [age, updatedAge] = useState("");
  const [editedList, updatedEditedList] = useState({});

  const clearFields = () => {
    updatedId("");
    updatedName("");
    updatedAge("");
  };

  const style = {
    fontWeight: "bold",
    fontSize: "1.3rem",
    color: "black",
    marginLeft: "3.2rem",
  };
  return (
    <div>
      <header className="header">
        <ul>
          <li style={style}>
            <Link to="/">HOME</Link>
          </li>
          <li style={style}>
            <Link to="/create-user">CREATE </Link>
          </li>
          <li style={style}>
            <Link to="/users">SHOW</Link>
          </li>
        </ul>
      </header>
      <hr />
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/create-user">
          <Create
            initialDetails={initialDetails}
            updatedData={updatedData}
            id={id}
            updatedId={updatedId}
            name={name}
            updatedName={updatedName}
            age={age}
            updatedAge={updatedAge}
            clearFields={clearFields}
          />
        </Route>
        <Route path="/users">
          <Read initialDetails={initialDetails} updatedData={updatedData} />
        </Route>
        <Route path="/edit-user/:index">
          <Update initialDetails={initialDetails} updatedData={updatedData} editedList={editedList} updatedEditedList={updatedEditedList} />
        </Route>
        <Route path="**">
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
