import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessageBox from "./MessageBox/MessageBox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MessageBox />
      </BrowserRouter>
    </div>
  );
}

export default App;
