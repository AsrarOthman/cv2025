import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Service from "./pages/Service";
import MediaSosial from "./pages/MediaSosial";
import ContactUs from "./pages/ContactUs";
import Graph from "./pages/Graph";
import Pendaftaran from "./pages/Pendaftaran";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/media" element={<MediaSosial />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        {/* Optional: Redirect root to /login */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
