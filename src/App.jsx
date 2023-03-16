import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupTranspPage from "./pages/SignupTranspPage/SignupPageTransp";
import LoginTranspPage from "./pages/LoginTranspPage/LoginTranspPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage"
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
        <Route path="/" element={<IsAnon><LandingPage /></IsAnon>} />
        <Route path="/dashboard" element={<IsPrivate> <Dashboard /> </IsPrivate>} />
        <Route path="/profile" element={<IsPrivate><MyProfilePage /></IsPrivate>} />
        <Route path="/profile/:id" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route path="/signup" element={<IsAnon><SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="transportist/signup" element={<IsAnon><SignupTranspPage /> </IsAnon>} />
        <Route path="transportist/login" element={<IsAnon> <LoginTranspPage /> </IsAnon>} />
        <Route path="mycargos" element={<IsPrivate><MyCargos /></IsPrivate>} />
        <Route path="/shipments/:id" element={<IsPrivate> <ShipmentDetails /> </IsPrivate>} />
      </Routes>
    </div>
  );
}
export default App;