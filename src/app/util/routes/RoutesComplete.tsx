import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrincipalTable } from "../../containers/PrincipalTable";



//Login container

const LazyTable = lazy(()=>import("../../containers/PrincipalTable").then(()=>({default: PrincipalTable})));


export const RouteComplete = () => {
  return (
    <Routes>
      <Route path="/home/*" element={<LazyTable/>}/>
    </Routes>
  );
};
