import { Fragment, useState } from "react";
import axios from 'axios'
import NewsList from "./components/NewsList";

function App() {
  return (
    <Fragment>
      <NewsList/>
    </Fragment>
  )
}

export default App;
