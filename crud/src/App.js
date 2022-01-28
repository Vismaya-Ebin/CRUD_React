import "./App.css";
import Create from "./components/Create.js";
import Read from "./components/Read.js";
import { useState } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

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
          {/* <li><Link to="/">HOME</Link></li> */}
          <li style={style}>
            <Link to="/add">ADD </Link>
          </li>
          <li style={style}>
            <Link to="/show">SHOW</Link>
          </li>
        </ul>
      </header>
      <hr />
      <Switch>
        <Route path="/" exact>
          {" "}
        </Route>
        <Route path="/add">
          {" "}
          <Create initialDetails={initialDetails} updatedData={updatedData} />{" "}
        </Route>
        <Route path="/show">
          {" "}
          <Read initialDetails={initialDetails} updatedData={updatedData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
