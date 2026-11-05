import { Routes, Route } from "react-router-dom";
import Landing from "@/features/marketing/pages/landing/Landing";
import ContactUs from "@/features/marketing/pages/contact-us/ContactUs";
import MarketingLayout from "@/layouts/MarketingLayout";
import AppLayout from "@/layouts/AppLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* MARKETING */}
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>

      {/* AUTH */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}

      {/* APP */}
      <Route element={<ProtectedRoute/>}>
        <Route path="/app" element={<AppLayout/>}>
          {/* <Route index element={<Dashboard />} /> */}
          {/* <Route path="transfer" element={<Transfer />} /> */}
          {/* <Route path="history" element={<History />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}
