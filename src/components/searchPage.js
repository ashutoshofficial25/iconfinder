import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/icon-logo.png";
import IconCard from "./iconCard";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

const SearchPage = () => {
  const { iconName } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState(iconName);
  const [iconResult, setIconResult] = useState();
  const [styles, setStyles] = useState();
  const [priceFilter, setPriceFilter] = useState("all");
  const [styleFilter, setStylFilter] = useState("");

  const searchIcon = (e) => {
    navigate(`/searchPage/${search}`);
  };

  useEffect(() => {
    fetch(
      `https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=${iconName}&premium=${priceFilter}&styles=${styleFilter}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then(function (response) {
        setIconResult(response);
      })
      .catch((error) => console.log(error));
  }, [priceFilter, styleFilter]);

  useEffect(() => {
    fetch(
      "https://iconfinder-api-auth.herokuapp.com/v4/styles?count=13",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then(function (response) {
        setStyles(response?.styles);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("log: pricefilter", priceFilter);

  return (
    <div>
      <nav className="navbar px-3 navbar-expand-lg align-items-center bg-success sticky-top">
        <Link className="" to="/">
          {" "}
          <img
            src={logo}
            alt="img"
            height="28"
            style={{ marginRight: "10px" }}
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdowm">
          <form className="form-inline  col-lg-5 d-flex">
            <input
              type="search"
              className="form-control mr-sm-2 lg"
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              aria-level="search"
            />
            <button className="btn" onClick={searchIcon}>
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        <div className="btn btn-outline-dark">Login/Signup</div>
      </nav>

      <div className="container-fluid ">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div
              id="sidebar-nav"
              className="list-group text-sm-start text-white min-vh-100"
            >
              <h4 className="text-muted">Filters</h4>
              <div className="priceFilter" style={{ marginLeft: "12px" }}>
                <label>
                  <input
                    type="radio"
                    name=""
                    id=""
                    value="free"
                    checked={priceFilter == "free" ? true : false}
                    onChange={(e) => setPriceFilter(e.target.value)}
                  />
                  &nbsp; Free
                </label>

                <hr />

                <label>
                  <input
                    type="radio"
                    name=""
                    id=""
                    value="premium"
                    checked={priceFilter == "premium" ? true : false}
                    onChange={(e) => setPriceFilter(e.target.value)}
                  />
                  &nbsp; Premium
                </label>

                <hr />

                <label>
                  <input
                    type="radio"
                    name=""
                    id=""
                    value="all"
                    checked={priceFilter == "all" ? true : false}
                    onChange={(e) => setPriceFilter(e.target.value)}
                  />
                  &nbsp; All
                </label>
              </div>
              <hr />
              <p className="text-muted"> Styles</p>
              {styles
                ? styles.map((style, index) => (
                    <label key={index} style={{ marginLeft: "12px" }}>
                      <input
                        type="radio"
                        name="style"
                        className="mb-1"
                        id="identifier  "
                        value={style.identifier}
                        checked={styleFilter == style.identifier ? true : false}
                        onChange={(e) => setStylFilter(e.target.value)}
                      />
                      &nbsp; {style.name}
                    </label>
                  ))
                : null}

              <hr />
            </div>
          </div>
          <div className="col py-3">
            {iconResult ? (
              <div className="content" id="content">
                <h3 className="pb-3 text-muted  ">
                  You searched for '{iconName}'- {styleFilter}
                </h3>

                <div className="showIcons row">
                  {iconResult.icons.map((icon, index) => {
                    return (
                      <IconCard
                        key={index}
                        url={icon?.raster_sizes[4]?.formats[0].preview_url}
                        tags={icon.tags}
                        raster={icon.raster_sizes}
                        premium={icon.is_premium}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-dark">
                  Loading. . .
                  <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                  </div>
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
