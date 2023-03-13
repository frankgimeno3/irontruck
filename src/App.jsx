import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupTranspPage from "./pages/SignupTranspPage/SignupPageTransp";
import LoginTranspPage from "./pages/LoginTranspPage/LoginTranspPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyCargos from "./pages/MyCargos/MyCargos";
import ShipmentDetails from "./pages/ShipmentDetails/ShipmentDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<IsAnon><LandingPage /></IsAnon>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route path="/signup" element={<IsAnon><SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="transportist/signup" element={<IsAnon><SignupTranspPage /> </IsAnon>} />
        <Route path="transportist/login" element={<IsAnon> <LoginTranspPage /> </IsAnon>} />
        <Route path="mycargos" element={<MyCargos />} />
        <Route path="/shipments/:id" element={<ShipmentDetails />} />
      </Routes>
    </div>
  );
}
export default App;