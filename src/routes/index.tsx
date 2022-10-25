import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ModalPage from "../pages/ModalPage";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modalpage" element={<ModalPage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
