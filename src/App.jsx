import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
import CountriesList from "./components/CountriesList";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
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
        <Route
          path="/app"
          element={<AppLayout />}>
          <Route
            index
            path="cities"
            element={
              <CityList
                cities={cities}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="countries"
            element={
              <CountriesList
                cities={cities}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="form"
            element={<p>Form</p>}
          />
        </Route>
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
