import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import LoginApplicationPage from "./components/LoginApplicationPage";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/products" element={<ProductsList />} />
    </Routes>
  );
}

export default App;
