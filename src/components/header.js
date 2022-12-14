import React, { useEffect, useState } from "react";

const options = {
  method: "GET",
  data: `${process.env.REACT_APP_CLIENT_ID}`,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

const Header = () => {
  const [styles, setStyles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://iconfinder-api-auth.herokuapp.com/v4/categories?count=15",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then(function (response) {
        setCategories(response.categories);
      })
      .catch((error) => console.log(error));

    fetch(
      "https://iconfinder-api-auth.herokuapp.com/v4/styles?count=13",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then(function (response) {
        setStyles(response.styles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <nav id="headnav" className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav dropdown-menu-dark">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Icon Sets
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  {categories.map((category) => (
                    <li key={category.identifier}>
                      <a className="dropdown-item" href="#">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Styles
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  {styles.map((style) => (
                    <li key={style.identifier}>
                      <a className="dropdown-item" href="#">
                        {style.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="btn btn-outline-secondary">Login/Singup</div>
        </div>
      </nav>
      _
    </div>
  );
};

export default Header;
