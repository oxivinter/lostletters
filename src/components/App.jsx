import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewAuthor from "./ViewAuthor/ViewAuthor";
import ViewMessage from "./ViewMessage/ViewMessage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewMessage/>} />
          <Route path="/author/:authorName" element={<ViewAuthor />} />
          <Route path="/message/:id" element={<ViewMessage />} />
          <Route path="*" element={<h1>Path Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
