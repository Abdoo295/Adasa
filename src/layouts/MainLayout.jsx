import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
