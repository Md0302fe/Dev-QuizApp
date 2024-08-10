import React, { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";

const ManageUser = (props) => {
  const [showUserForm, setShowUserForm] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowUserForm(true)}
          >
            Add new user
            <FcPlus />
          </button>
        </div>
        <div className="table-users-container">table users</div>
        <ModalCreateUser show={showUserForm} setShow={setShowUserForm} />
      </div>
    </div>
  );
};

export default ManageUser;
