import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ModalPage from "../pages/ModalPage";

import Authentication from "../pages/Auth";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication page="login" />} />
        <Route path="/register" element={<Authentication page="register" />} />
        <Route path="/forget-password" element={<Authentication page="forget-password" />} />
        <Route path="/modalpage" element={<ModalPage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
