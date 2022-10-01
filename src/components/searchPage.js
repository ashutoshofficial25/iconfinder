import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/icon-logo.png";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer 77BkpdDPBbGO1Yuy5or0T8tpAZ4m566kzygVhaBxsdZLl4AVnaakuo0ogXRnJR07",
  },
};

const SearchPage = () => {
  const { iconNames } = useParams();
  const [iconResult, setIconResult] = useState();
  const [styles, setStyles] = useState();
  const [priceFilter, setPriceFilter] = useState("All");
  const [styleFilter, setStylFilter] = useState("All");

  useEffect(() => {
    fetch(
      `http://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/icons/search?query=${iconNames}`,
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

    fetch(
      "http://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/styles?count=13",
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
      {iconResult ? (
        <div></div>
      ) : (
        <div>
          {" "}
          <h1 className="text-dark"> Loading</h1>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
