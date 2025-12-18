import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import { Register } from "../pages/register/Register";
import { NotFound } from "../pages/notfound/NotFound";
import { Dashboard } from "../pages/dashboard/dashboard";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
