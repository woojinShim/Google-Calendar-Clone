import React, { useState } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";

function App() {
  console.table(getMonth(3));
  return (
    <>
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month />
        </div>
      </div>
    </>
  );
}

export default App;
