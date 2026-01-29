import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/common/Landing";
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
