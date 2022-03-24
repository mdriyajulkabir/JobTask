import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sikayetler from "./Pages/Sikayetler/Sikayetler";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sikayetler" element={<Sikayetler/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
