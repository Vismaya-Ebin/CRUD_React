import "./App.css";
import Create from "./components/Create.js";
import Read from "./components/Read.js";
import { useState, createContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Notfound from "./components/Notfound";
import { Welcome } from "./components/Welcome";
// import { Update } from "./components/Update.js";
import EditUser from "./components/EditUser.js";

const context = createContext(null);
function App() {
  const initialData = [
    {
      adhar_id: "614111111101",
      name: "Vismaya",
      phone: "9847443444",
    },
    {
      adhar_id: "614111111102",
      name: "Ebin",
      phone: "9847443555",
    },
    {
      adhar_id: "614111111103",
      name: "Elena",
      phone: "9847443556",
    },
  ];

  const [initialDetails, updatedDetails] = useState(initialData);
  const data = {
    initialDetails: initialDetails,
    updatedDetails: updatedDetails,
  };

  const style = {
    fontWeight: "bold",
    fontSize: "1.3rem",
    color: "black",
    marginLeft: "3.2rem",
  };
  return (
    <context.Provider value={data}>
      <div>
        <header className="header">
          <ul>
            <li style={style}>
              <Link to="/">HOME </Link>
            </li>
            <li style={style}>
              <Link to="/create-user">ADD </Link>
            </li>
            <li style={style}>
              <Link to="/users">SHOW</Link>
            </li>
          </ul>
        </header>
        <hr />
        <Switch>
          <Route path="/" exact>
            {" "}
            <Welcome />
          </Route>
          <Route path="/create-user">
            <Create context={context} />
          </Route>
          <Route path="/users">
            <Read context={context} />
          </Route>
          <Route path="/edit-user/:index">
            <EditUser context={context} />
          </Route>
          <Route path="**">
            <Notfound />
          </Route>
        </Switch>
      </div>
    </context.Provider>
  );
}

export default App;
