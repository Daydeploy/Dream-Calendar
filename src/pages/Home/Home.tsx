import { useState } from "react";
import "./Home.css";


function Home() {
  const [showRegister, setShowRegister] = useState(false);

  const handleToggle = () => setShowRegister(!showRegister);

   return (
    <div >
      <h1 style={{ color: "black" }}>Welcome</h1>
      <h3 style={{ color: "black" }}>{showRegister ? "Register" : "Login"}</h3>

      <div
      style={{ width: "200px", margin: "0 auto", backgroundColor: "white", padding: "20px", borderRadius: "10px" }}
      >
        {!showRegister ? (
          <form>
            <input name="username" type="text" placeholder="Username" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <button type="button" onClick={handleToggle}>
              Register
            </button>
          </form>
        ) : (
          <form>
            <input name="username" type="text" placeholder="Username" />
            <input name="password" type="password" placeholder="Password" />
            <input name="firstname" type="text" placeholder="First name" />
            <input name="lastname" type="text" placeholder="Last name" />
            <input name="email" type="email" placeholder="Email" />
            <input name="telnumber" type="tel" placeholder="Phone number" />
            <button className="btn" type="submit">Register</button>
            <button className="btn" type="button" onClick={handleToggle}>
              Back to Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Home;