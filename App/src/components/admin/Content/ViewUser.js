import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import _ from "lodash";

const ViewUser = ({ show, setShow, dataUpdate }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
    role: "USER",
    previewImage: "",
    image: "",
  });

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      // update State
      setState({
        email: dataUpdate.email || "",
        password: dataUpdate.password || "",
        username: dataUpdate.username || "",
        role: dataUpdate.role || "",
        // display base 64 img. and handle object without image.
        previewImage: dataUpdate.image
          ? `data:image/jpeg;base64,${dataUpdate.image}`
          : null,
        image: "",
      });
    }
  }, [dataUpdate]);

  // Handle-Close-Form
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        id="Form-Add-User"
        className="modal-add-user"
        backdrop="true"
        show={show}
        onHide={handleClose}
        size="xl"
      >
        {/* Header Modal */}
        <Modal.Header closeButton>
          <Modal.Title>User Infomation</Modal.Title>
        </Modal.Header>
        {/* Body Modal */}
        <Modal.Body>
          <Form>
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>User ID</Form.Label>
                <h2>{dataUpdate.id}</h2>
              </Form.Group>
            </Row>
            {/* Row 1 : Email , Password */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={state.email}
                  disabled
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
                  autoComplete="current-password"
                  disabled
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
                  disabled
                  placeholder="Enter User Name"
                  value={state.username}
                  autoComplete="username"
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
                  disabled
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
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewUser;
