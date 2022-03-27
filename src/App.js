import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home/Home";
import Sikayetler from "./Pages/Sikayetler/Sikayetler";
import MarkaKarsilastir from "./Pages/MarkaKarsillastir/MarkaKarsilastir";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sikayetler" element={<Sikayetler/>} />
        <Route path="/karsilastir" element={<MarkaKarsilastir/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
