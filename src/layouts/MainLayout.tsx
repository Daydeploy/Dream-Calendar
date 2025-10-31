import { Outlet, Link } from "react-router-dom";
import DarkModeButton from "@/components/DarkModeButton";

export default function MainLayout() {
  return (
    <div>
      <header>
        <div style = {{ position: "fixed", top: "1rem", right: "1rem", zIndex: 1000 }}>
          <DarkModeButton />
        </div>
        
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Outlet /> {/* Renders the current route’s page here */}
      </main>
    </div>
  );
}
