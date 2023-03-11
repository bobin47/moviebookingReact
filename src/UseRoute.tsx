import React from "react";
import { useRoutes } from "react-router-dom";

import LayoutMain from "./layouts/LayoutMain";
import Muave from "./pages/Muave";

export default function UseRoute() {
  const routeElement = useRoutes([
    {
      path: "/",
      index: true,
      element: (
        <LayoutMain>
          <Muave />
        </LayoutMain>
      ),
    },
    {
      path: "/lich-chieu",
      index: true,
      element: (
        <LayoutMain>
          <Muave />
        </LayoutMain>
      ),
    },
  ]);

  return routeElement;
}
