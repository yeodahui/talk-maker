import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MakerPage from "./MakerPage";
import DonePage from "./DonePage";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/maker" element={<MakerPage />} />
      <Route path="/done" element={<DonePage />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default RouterComponent;
