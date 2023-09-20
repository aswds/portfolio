import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MainScreen from "./components/Main/MainScreen";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.DEV ? "/" : "/portfolio",
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
