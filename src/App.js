import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Sikayetler from "./Pages/Sikayetler/Sikayetler";
import CompareBrands from "./Pages/CompareBrands/CompareBrands";
import Trend100 from "./Pages/Trend100/Trend100";
import WriteComplement from "./Pages/WriteComplement/WriteComplement";
import Kurumsal from "./Page2/Kurumsal/Kurumsal";
import AdvertisingSolutions from "./Page2/AdvertisingSolutions/AdvertisingSolutions";
import AceRewards from "./Page2/AceRewards/AceRewards";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sikayetler" element={<Sikayetler />} />
          <Route path="/karsilastir" element={<CompareBrands />} />
          <Route path="/trend-100" element={<Trend100 />} />
          <Route path="/sikayetyaz" element={<WriteComplement />} />
          <Route path="/kurumsal-uyelik" element={<Kurumsal />} />
          <Route path="/reklam-cozumleri" element={<AdvertisingSolutions />} />
          <Route path="/ace-odulleri" element={<AceRewards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
