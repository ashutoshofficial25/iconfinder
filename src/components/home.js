import React, { useState } from "react";
import Header from "./header";
import logo from "../assets/icon-logo.png";
import { useHistory } from "react-router-dom";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer 77BkpdDPBbGO1Yuy5or0T8tpAZ4m566kzygVhaBxsdZLl4AVnaakuo0ogXRnJR07",
  },
};

const Home = () => {
  const [searchIcon, setSearchIcon] = useState("");
  const navigate = useHistory();

  console.log(searchIcon);

  const searchClick = () => {
    navigate(`searchPage${searchIcon}`);
  };
  return (
    <div>
      <Header />

      <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        <img src={logo} alt="logo-img" />

        <div className="input-group input-group-lg px-5 w-50 bg-light">
          <input
            className="form-control px-5 bg-light"
            placeholder="Search for icons"
            onChange={(e) => setSearchIcon(e.target.value)}
          />
          &nbsp;
          <button
            className="btn btn-lg btn-outline-light text-dark"
            onClick={searchClick}
          >
            {" "}
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="m-3">
          <p className="text-secondary">
            Popular searches : Instagram, facebook, Arrow, Phone
          </p>
          <h5> Search through 5,749,072 Icons and illustrations</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
