import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNoteFount from "./pages/PageNotFound";
import CountryList from "./components/CountryList";
import CityList from "./components/Citylist";
import City from "./components/City";
import Form from "./components/Form";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <div>
      <CitiesProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNoteFount />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </CitiesProvider>
    </div>
  );
};

export default App;
