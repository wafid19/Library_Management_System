import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./assets/Add";
import Books from "./assets/Books";
import Update from "./assets/Update";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;