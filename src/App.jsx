import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/product"
          element={<Product />}
        />
        <Route
          path="/pricing"
          element={<Pricing />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
