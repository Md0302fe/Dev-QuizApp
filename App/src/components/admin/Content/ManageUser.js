import React, { useState, useEffect } from "react";
import { FcPlus } from "react-icons/fc";
import "./ManageUser.scss";
import {
  getAllUsers,
  getUserWithPaginate,
} from "../../../services/apiServices";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ViewUser from "./ViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const limit_user = 6;
  const [listUsers, setListUsers] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [showUserForm, setShowUserForm] = useState(false);
  const [showViewUser, setShowViewUser] = useState(false);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // ComponentsDidmount : Reload list user by reload ManagerUser Components.
  useEffect(() => {
    fetchListUserWithPaginate(currentPage);
  }, []);

  // (f) : reload call api get list of user.
  const fetchListUser = async () => {
    let res = await getAllUsers();
    res.EC === 0 ? setListUsers(res.DT.reverse()) : setListUsers([]);
  };

  // (f) : reload call api get all list user using PAGINATE.
  const fetchListUserWithPaginate = async (pageCount) => {
    let res = await getUserWithPaginate(pageCount, limit_user);
    if (res.EC === 0) {
      setPageCount(res.DT.totalPages);
      setListUsers(res.DT.users);
    } else {
      setListUsers([]);
    }
  };

  // (f) : Handle Click Btn-Update
  const handleClickUpdateBtn = (user) => {
    setShowUpdateUser(true);
    setDataUpdate(user);
  };

  // (f) : Handle Click Btn-View
  const handleClickViewBtn = (user) => {
    setShowViewUser(true);
    setDataUpdate(user);
  };

  // (f) : Handle Click Btn-Delete
  const handleClickDeleteBtn = (user) => {
    setShowDeleteUser(true);
    console.log(user);
    setDataDelete(user);
  };

  // reset data after update user data succeed
  const resetUpdateData = () => {
    setDataUpdate([]);
  };

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      {/* Main-Content */}
      <div className="user-content">
        {/* btn-add new user */}
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowUserForm(true)}
          >
            Add new user
            <FcPlus />
          </button>
        </div>
        {/* table display list user */}
        <div className="table-users-container">
          {/* 1 : Table-Display-User */}
          <TableUserPaginate
            listUsers={listUsers}
            handleClickUpdateBtn={handleClickUpdateBtn}
            handleClickViewBtn={handleClickViewBtn}
            handleClickDeleteBtn={handleClickDeleteBtn}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></TableUserPaginate>
        </div>
        {/* 2 : Create User  */}
        <ModalCreateUser
          show={showUserForm}
          setShow={setShowUserForm}
          fetchListUser={fetchListUser}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {/* 3 : Update User */}
        <ModalUpdateUser
          show={showUpdateUser}
          setShow={setShowUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUser={fetchListUser}
          resetUpdateData={resetUpdateData}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></ModalUpdateUser>

        {/* 4 : View User */}
        <ViewUser
          show={showViewUser}
          setShow={setShowViewUser}
          dataUpdate={dataUpdate}
          fetchListUser={fetchListUser}
          resetUpdateData={resetUpdateData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></ViewUser>

        {/* 5 : Delete User */}
        <ModalDeleteUser
          show={showDeleteUser}
          setShow={setShowDeleteUser}
          dataDelete={dataDelete}
          fetchListUser={fetchListUser}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></ModalDeleteUser>
      </div>
    </div>
  );
};

export default ManageUser;
