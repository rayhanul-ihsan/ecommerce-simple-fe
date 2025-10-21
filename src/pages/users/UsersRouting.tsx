import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../../features/products/component/ProductList";
import AppLayout from "../../modules/AppLayout/AppLayout";
import UserManagement from "../../features/user/components/UserManagement";

export default function UserRouting() {
  return (
    <AppLayout>
      <Routes>
        <Route path="">
          <Route
            path="user-management"
            element={
              <React.Suspense>
                <UserManagement />
              </React.Suspense>
            }
          ></Route>
          <Route path="*" element={"404"}></Route>
        </Route>
      </Routes>
    </AppLayout>
  );
}
