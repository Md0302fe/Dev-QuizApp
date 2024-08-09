import { React, useState } from "react";

import Sidebar from "../Admin/Sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./Admin.scss";

import { FaBars } from "react-icons/fa6";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed}></Sidebar>
      </div>

      <div className="admin-content">
        <FaBars
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
        content admin
      </div>
    </div>
  );
};

export default Admin;
