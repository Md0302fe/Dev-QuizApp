import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import Homepage from "./components/home/Hompage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> {/* Sử dụng nested route bao bọc các outlet cần hiển thị*/}
          <Route index element={<Homepage />} /> {/* Sử dụng index route chỉ dẫn trang mặc định cần hiển thị*/}
          <Route path="/users" element={<User />} /> 
          <Route path="/admins" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
