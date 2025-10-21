import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductsRouting from "./pages/products/ProductsRouting";
import SigninPage from "./pages/auth/SigninPage";
import UserManagement from "./features/user/components/UserManagement";
import AppLayout from "./modules/AppLayout/AppLayout";
import UserRouting from "./pages/users/UsersRouting";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
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
        <Routes>
          <Route path="administration/*" element={<UserRouting />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
