import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Topup from "./components/Header/Topup";

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Topup></Topup>
        <Header></Header>
      </div>

      <div className="main-container">
        <div className="slidenav-container"></div>
        <div className="app-content">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
