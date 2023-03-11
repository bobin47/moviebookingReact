import React from "react";

import UseRoute from "./UseRoute";

export default function App() {
  const routeElement = UseRoute();
  return <div>{routeElement}</div>;
}
