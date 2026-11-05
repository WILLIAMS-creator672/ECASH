import { Outlet } from "react-router-dom";
import NavBar from "@/features/marketing/components/Navbar";
import Footer from "@/features/marketing/components/Footer";

export default function MarketingLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
