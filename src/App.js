import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";
import About from "./Component/About";
//import Notifications from "./Component/Notifications";
//import Messages from "./Component/Messages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}
