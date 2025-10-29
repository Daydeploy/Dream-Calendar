import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Book from "@/pages/Book";

import MainLayout from "@/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "book", element: <Book /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
