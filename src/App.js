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
import Trend100 from "./Pages/Trend100/Trend100";
import SikayetYaz from "./Pages/SikayetYaz/SikayetYaz";
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sikayetler" element={<Sikayetler/>} />
        <Route path="/karsilastir" element={<MarkaKarsilastir/>} />
        <Route path="/trend-100" element={<Trend100/>} />
        <Route path="/sikayetyaz" element={<SikayetYaz/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
