import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import Home from "./components/home";

function Routes() {
  return (
    <Suspense fallback={"<h1>Loading</h1>"}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Suspense>
  );
}

export default Routes;
