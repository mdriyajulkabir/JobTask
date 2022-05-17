import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/rsuite.min.css";
import Home from "./Pages/Home/Home";
import Complaints from "./Pages/Complaints/Complaints";
import CompareBrands from "./Pages/CompareBrands/CompareBrands";
import Trend100 from "./Pages/Trend100/Trend100";
import WriteComplement from "./Pages/WriteComplement/WriteComplement";
import Kurumsal from "./Page2/Kurumsal/Kurumsal";
import AdvertisingSolutions from "./Page2/AdvertisingSolutions/AdvertisingSolutions";
import AceRewards from "./Page2/AceRewards/AceRewards";
import ComplaintDetails from "./Pages/Complaints/ComplaintDetails/ComplaintDetails";
import ProductSolutionPage from "./Pages/ProductSolution/ProductSolutionPage";
import ProductCompare from "./Pages/CompareBrands/ProductCompare/ProductCompare";
import UserComplaints from "./Pages/UserComplaints/UserComplaints";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sikayetler" element={<Complaints />} />
          <Route
            path="/sikayetler/complaint-details"
            element={<ComplaintDetails />}
          />
          <Route
            path="/sikayetler/user-all-complaints"
            element={<UserComplaints />}
          />
          <Route path="/karsilastir" element={<CompareBrands />} />
          <Route path="/product-compare" element={<ProductCompare />} />
          <Route path="/product-solution" element={<ProductSolutionPage />} />
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
