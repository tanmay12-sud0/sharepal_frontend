import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Home";

import Header from "./Components/Nav/Header";

import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { currentuser } from "./Function/auth";

import AdminDashboard from "./Pages/admin/AdminDashboard";
import CategoryCreate from "./Pages/admin/Category/CategoryCreate";
import SubCreate from "./Pages/admin/sub/SubCreate";
import ProductCreate from "./Pages/product/ProductCreate";
import AllProducts from "./Pages/product/Allproduct";
import Product from "./Pages/Product";
import CategoryHome from "./Pages/Category/CategoryHome";

import Subhome from "./Pages/Category/Subhome";


const CONSTANTS = require("./cssVariables");

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const OnSubcribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        currentuser(idTokenResult.token)
          .then((res) =>
            dispatch({
              type: "LOGIN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            })
          )
          .catch((err) => console.log("ERROR", err));
      }
    });
    return () => OnSubcribe();
  }, []);

  const AppStyle = {
    color: CONSTANTS.text,
  };

  return (
    <div style={AppStyle}>

      <br />
      <br />
      <br />
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/product/product/:slug">
          <Product />
        </Route>
        <Route path="/category/:slug">
          <CategoryHome />
        </Route>
        <Route path="/sub/:slug">
          <Subhome />
        </Route>
        <Route exact path="/admin/dashboard">
          <AdminDashboard />
        </Route>
        <Route exact path="/admin/category">
          <CategoryCreate />
        </Route>
        <Route exact path="/admin/subcategory">
          <SubCreate />
        </Route>
        <Route exact path="/admin/product">
          <ProductCreate />
        </Route>
        <Route exact path="/admin/products">
          <AllProducts />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
