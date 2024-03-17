import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:title" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
