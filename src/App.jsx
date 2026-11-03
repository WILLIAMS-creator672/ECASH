import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import ContactUs from "./pages/contact-us/ContactUs";

export default function App() {
  return (
    <>
      {/* <Landing /> */}
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
    </>
  )
}