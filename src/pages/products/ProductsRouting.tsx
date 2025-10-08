import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../../features/products/component/ProductList";
import AppLayout from "../../modules/AppLayout/AppLayout";

export default function ProductsRouting() {
  return (
    <AppLayout>
      <Routes>
        <Route path="">
          <Route
            path="list"
            element={
              <React.Suspense>
                <ProductList />
              </React.Suspense>
            }
          ></Route>
          <Route path="*" element={"404"}></Route>
        </Route>
      </Routes>
    </AppLayout>
  );
}
