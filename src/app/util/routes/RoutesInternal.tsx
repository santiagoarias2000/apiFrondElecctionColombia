import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Amazonas } from "../../view/private/Amazonas/Amazonas";
import { Leticia } from "../../view/private/Amazonas/Leticia";
import { Gobernador } from "../../view/private/Amazonas/Gobernador";
import { Arcesio } from "../../view/private/Amazonas/Acersio";

const LazyAmazonas = lazy(() =>
  import("../../view/private/Amazonas/Amazonas").then(() => ({
    default: Amazonas,
  }))
);
const LazyLeticia = lazy(() =>
  import("../../view/private/Amazonas/Leticia").then(() => ({
    default: Leticia,
  }))
);
const LazyGobernador = lazy(() =>
  import("../../view/private/Amazonas/Gobernador").then(() => ({
    default: Gobernador,
  }))
);
const LazyAcensio = lazy(() =>
  import("../../view/private/Amazonas/Acersio").then(() => ({
    default: Arcesio,
  }))
);
export const RoutesInternal = () => {
  return (
    <Routes>
      <Route path="/amazonas"element={<LazyAmazonas/>}/>
      <Route path="/leticia"element={<LazyLeticia/>}/>
      <Route path="/gobernador/:codeCor"element={<LazyGobernador/>}/>
      <Route path="/arcesio"element={<LazyAcensio/>}/>
    </Routes>
  );
};
