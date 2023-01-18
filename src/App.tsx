import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { RouteComplete } from "./app/util/routes/RoutesComplete";

const charging = <div>Por favor sea pacente...</div>;
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={charging}>
        <RouteComplete/>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
