import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Products from "../Pages/Products/Products";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/add-product" element={<AddProducts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Details />} />
        </Route>
        {/* Admin Route */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<div>Dashboard Home</div>} />
          <Route path="/dashboard/Payment" element={<div>Payment Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
