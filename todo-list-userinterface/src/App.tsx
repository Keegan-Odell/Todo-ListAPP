import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./features/home/Home";
import NavBar from "./components/NavBar";
import ToDo from "./features/Todo/ToDo";

function App() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <Router>
          <NavBar />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/ToDo" element={<ToDo />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
