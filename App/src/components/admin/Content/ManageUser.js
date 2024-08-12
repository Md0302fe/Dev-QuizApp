import React, { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableDisplayUser from "./TableDisplayUser";
import { useEffect } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
  const [showUserForm, setShowUserForm] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [updateUser, setUpdateUser] = useState(false);

  const [dataUpdate, setDataUpdate] = useState({});

  // ComponentsDidmount
  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUsers();
    res.EC === 0 ? setListUsers(res.DT) : setListUsers([]);
  };

  const handleClickUpdateBtn = (user) => {
    setUpdateUser(true);
    setDataUpdate(user);
  };

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
        <div className="table-users-container">
          <TableDisplayUser
            listUsers={listUsers}
            handleClickUpdateBtn={handleClickUpdateBtn}
          ></TableDisplayUser>
        </div>
        <ModalCreateUser
          show={showUserForm}
          setShow={setShowUserForm}
          fetchListUser={fetchListUser}
        />
        <ModalUpdateUser
          show={updateUser}
          setShow={setUpdateUser}
          dataUpdate={dataUpdate}
        ></ModalUpdateUser>
      </div>
    </div>
  );
};

export default ManageUser;
