import { Outlet, Link } from "react-router-dom";

import NavBar from "/Users/rowin04/Desktop/GitHub/Dream-Calendar/src/components/Navbar"
import "bootstrap/dist/css/bootstrap.css"
import imagePath from "/Users/rowin04/Desktop/GitHub/Dream-Calendar/src/assets/pictures/doge.jpeg"
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

// import React, { useEffect, useState } from "react";
// import { Outlet, Link } from "react-router-dom";

// import NavBar from "@/components/Navbar";
// import "bootstrap/dist/css/bootstrap.css";
// import imagePath from "@/assets/pictures/doge.jpeg";

// export default function MainLayout() {
//   // Simple auth detection: assumes an auth token is stored in localStorage under 'authToken'.
//   // Change this to your actual auth check (context, cookie, redux, etc.) as needed.
//   const [loggedIn, setLoggedIn] = useState<boolean>(false);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setLoggedIn(Boolean(token));
//   }, []);

//   return (
//     <div>
//       <header>
//         {loggedIn == true ? 
//           <NavBar
//             brandName={"Dream Calendar"}
//             imageSrcPath={imagePath}
//             loggedIn={true}
//           />
//         : 
//           <NavBar
//             brandName={"Dream Calendar"}
//             imageSrcPath={imagePath}
//             loggedIn={false}
//           />
//         }

//         <nav>
//           {/* <Link to="/">Home</Link>
//           <Link to="/about">About</Link> */}
//           {/* <Link to="/bookroom">Book Room</Link> */}
//         </nav>
//       </header>

//       <main>
//         <Outlet /> {/* Renders the current route’s page here */}
//       </main>
//     </div>
//   );
// }
