import { Outlet, Link } from "react-router-dom";
import DarkModeButton from "@/components/DarkModeButton";

import NavBar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.css"
import imagePath from "../assets/pictures/doge.jpeg"
export default function MainLayout() {
  return (
    <div>
      <header>
        <NavBar
      brandName = {"Dream Calender"}
      imageSrcPath = {imagePath}
      loggedIn = {true}/>
      </header>
      <main>
        <Outlet /> {/* Renders the current route’s page here */}
      </main>
    </div>
  );
}
