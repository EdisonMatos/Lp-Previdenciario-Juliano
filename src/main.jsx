import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";

import "./index.css";
import "./styles/backgrounds.css";
import "./styles/shapeDivs.css";
import LandingPage from "./pages/LandingPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      {/* <Route path="/template" element={<Index />} /> */}
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </Router>
);
