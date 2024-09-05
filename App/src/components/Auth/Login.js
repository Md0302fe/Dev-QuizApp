import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postLogin } from "../../services/apiServices";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle click login after fill on the blank.
  const handleLogin = async () => {
    // validate data from form

    // submit data
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  // back-to-home
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button className="btn-signup">Sign up</button>
      </div>

      <div className="title col-4 mx-auto">MD.dev</div>

      <div className="welcome col-4 mx-auto">Hello, who's this?</div>

      <div className="content-form col-4 mx-auto">
        {/* useName - email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        {/* password */}
        <div className="form-group">
          <label>Email</label>
          <input
            type={"password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <span className="forgot-password">Forgot password ?</span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            Login to App
          </button>
        </div>
        <div className="back btn">
          <span onClick={() => handleBack()}> &#60;&#60; Back to Homepage</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
