import React from "react";
import Router from "./routes/path";
import SideBar from "./components/dashboard/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Router />
    </div>
  );
}

export default App;
