import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductsRouting from "./pages/products/ProductsRouting";
import SigninPage from "./pages/auth/SigninPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to={"signin"} />}></Route>
      </Routes>
      <Routes>
        <Route path="products/*" element={<ProductsRouting />}></Route>
      </Routes>
      <Routes>
        <Route path="signin" element={<SigninPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
