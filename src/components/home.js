import React, { useState } from "react";
import Header from "./header";
import logo from "../assets/icon-logo.png";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  // console.log(searchIcon);

  const searchClick = () => {
    console.log(`/searchPage/${searchIcon}`);
    navigate(`/searchPage/${searchIcon}`);
  };
  return (
    <div>
      <Header />

      <div className="vh-100 navbar-fixed-top d-flex flex-column justify-content-center align-items-center text-center">
        <img src={logo} alt="logo-img" className="p-4" />

        <form
          style={{
            boxShadow: "0 5px 15px 0px rgba(0, 0, 0, 0.4 )",
            borderRadius: "10px",
          }}
          className="input-group input-group-lg  w-50 bg-light"
        >
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
        </form>

        <div className="m-3">
          <p className="text-secondary">
            Popular searches : Instagram, facebook, Arrow, Phone
          </p>
          <h5> Search through 6,825,000+ Icons and illustrations</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
