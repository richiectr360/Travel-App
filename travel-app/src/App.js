import { Route, Routes } from "react-router-dom";
import { Home, SingleHotel,  } from "./pages";
import './App.css';

function App() {
  return (  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels/:name" element = {<SingleHotel />} />
    </Routes>
    <Home />
  );
}

export default App;
