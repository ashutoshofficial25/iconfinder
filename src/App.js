import "./App.css";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/searchPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/searchPage/:iconName" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
