import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <header>
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
