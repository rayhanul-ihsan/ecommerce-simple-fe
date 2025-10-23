import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../../features/products/component/ProductList";
import AppLayout from "../../modules/AppLayout/AppLayout";
import ProductsUserList from "../../features/products/component/ProductsUserList";

export default function ProductsRouting() {
  return (
    <Routes>
      <Route path="">
        <Route
          path=""
          element={
            <React.Suspense>
              <AppLayout>
                <ProductList />
              </AppLayout>
            </React.Suspense>
          }
        ></Route>
        <Route
          path="list"
          element={
            <React.Suspense>
              <ProductsUserList />
            </React.Suspense>
          }
        ></Route>
        <Route path="*" element={"404"}></Route>
      </Route>
    </Routes>
  );
}
