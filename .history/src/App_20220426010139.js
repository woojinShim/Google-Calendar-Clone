import logo from "./logo.svg";
import "./App.css";
import { getMonth } from "./util";

function App() {
  console.table(getMonth(3));
  return <div className="App"></div>;
}

export default App;
