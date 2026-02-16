import { createBrowserRouter } from "react-router";

import App from "./containers/App";
import FilmsList from "./containers/FilmsList";
import SearchFilms from "./containers/SearchFilms";
import Home from "./containers/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        // path: "films",
        index: true,
        Component: Home,
      },
      {
        path: "films",
        Component: FilmsList,
      },
      {
        path: "search",
        Component: SearchFilms,
      },
    ],
  },
]);
