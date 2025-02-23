import React from "react";

import { Routes, Route } from "react-router-dom";
import { ROUTER } from "../shared/constants/router";
import { HomePage } from "../pages/Home";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME} element={<HomePage />} />
    </Routes>
  );
};

export default Routers;
