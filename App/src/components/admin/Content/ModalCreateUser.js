import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FcPlus } from "react-icons/fc";
import axios from "axios";

import { toast } from "react-toastify";

const ModalCreateUser = ({ show, setShow }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
    role: "USER",
    image: "",
    previewImage: "",
  });
  // handle-Close-Form
  const handleClose = () => {
    setShow(false);
    setState({
      email: "",
      password: "",
      username: "",
      role: "USER",
      image: "",
      previewImage: "",
    });
  };
  // Handle-Upload-Image
  const handleUploadImage = (event) => {
    // BLOB image .
    const url = URL.createObjectURL(event.target.files[0]);
    if (event.target && event.target.files && event.target.files[0]) {
      setState((prevState) => ({
        ...prevState,
        previewImage: url,
        image: url,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        previewImage: null,
      }));
    }
  };
  // Handle-Submit-Create-User
  const handleSubmitCreateUser = async () => {
    // validate : data
    const isValidateEmail = validateEmail(state.email);
    const isValidatePassword = validatePassword(state.password);

    if (!isValidateEmail) {
      toast.error("Invalid email");
      return;
    }
    if (!isValidatePassword) {
      toast.info(
        "Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt"
      );
      return;
    }

    // use axios post data
    const data = new FormData();
    data.append("email", state.email);
    data.append("password", state.password);
    data.append("username", state.username);
    data.append("role", state.role);
    data.append("userImage", state.image);

    let res = await axios.post(
      "http://localhost:8081/api/v1/participant",
      data
    );
    console.log("CHECK POST >>> " + res.data);
    if (res.data && res.data.EC === 0) {
      toast.success("Add new user success !");
      handleClose();
    }
    if (res.data && res.data.EC != 0) {
      toast.error(res.data.EM);
    }
  };

  // Validated--Email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // Validated--Password
  const validatePassword = (password) => {
    var regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password) ? true : false;
  };

  return (
    <>
      <Modal
        id="Form-Add-User"
        className="modal-add-user"
        backdrop="static"
        show={show}
        onHide={handleClose}
        size="xl"
      >
        {/* Header Modal */}
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        {/* Body Modal */}
        <Modal.Body>
          <Form>
            {/* Row 1 : Email , Password */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={state.email}
                  onChange={(event) => {
                    setState((prevState) => ({
                      ...prevState,
                      email: event.target.value,
                    }));
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={(event) => {
                    setState((prevState) => ({
                      ...prevState,
                      password: event.target.value,
                    }));
                  }}
                />
              </Form.Group>
            </Row>
            {/* Row 2 : UserName , Role */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  placeholder="Enter User Name"
                  value={state.username}
                  onChange={(event) => {
                    setState((prevState) => ({
                      ...prevState,
                      username: event.target.value,
                    }));
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  value={state.role}
                  onChange={(event) => {
                    setState((prevState) => ({
                      ...prevState,
                      role: event.target.value,
                    }));
                  }}
                >
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </Form.Select>
              </Form.Group>
            </Row>
            {/* Row 3 : User Image */}
            <Row>
              <Form.Group
                className="load-image"
                as={Col}
                controlId="formGridImage"
                onChange={(event) => handleUploadImage(event)}
              >
                <Form.Label className="label-upload">
                  Upload File Image
                  <FcPlus className="label-upload-icon" />
                </Form.Label>

                <Form.Control type="file" size="sm" hidden />
              </Form.Group>
            </Row>
            {/* Row 4 : Handle Show Image */}
            <Form.Group
              as={Col}
              controlId="formGridUserImage"
              className="img-preview"
            >
              {state.previewImage ? (
                <img src={state.previewImage} alt="img-preview" />
              ) : (
                <span>Preview Image</span>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        {/* Footer Modal */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
