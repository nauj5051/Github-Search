import {Outlet} from "react-router-dom";
import classes from "./app.module.css";

function App() {
  return (
    <>
      <div className={classes.app}>
        <h1>GITBUB-SEARCH</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
