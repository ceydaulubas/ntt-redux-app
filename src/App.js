import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuItem, Home } from "./pages";
import { NavBar } from "./components";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menuItem" element={<MenuItem />} />
      </Routes>
    </Router>
  );
}

export default App;
