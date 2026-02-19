import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import "./styles/styles.css";

import { Provider } from "react-redux";
import { store } from "./store/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
