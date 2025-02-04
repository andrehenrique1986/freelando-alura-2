import { createBrowserRouter } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInicial";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <PaginaInicial />,
      children: [],
    },
  ]);
  