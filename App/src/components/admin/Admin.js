import { React, useState } from "react";

import Sidebar from "../Admin/Sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./Admin.scss";

import { FaBars } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      {/* Admin-Sidebar */}
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed}></Sidebar>
      </div>

      <div className="admin-content">
        {/* admin-header-content */}
        <div className="admin-header">
          <FaBars
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          />
        </div>

        {/* admin-main-content */}
        <div className="admin-main">
          <Outlet />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Admin;
