import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ModalPage from "../pages/ModalPage";

import Authentication from "../pages/Auth";
import PrivateContainer from "../components/PrivateContainer";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/modalpage" element={<ModalPage />} />
        </Route>

        <Route path="/login" element={<Authentication page="login" />} />
        <Route path="/register" element={<Authentication page="register" />} />
        <Route
          path="/forget-password"
          element={<Authentication page="forget-password" />}
        />
      </Routes>
    </Router>
  );
};

export default Routers;
