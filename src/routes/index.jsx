import { Spin } from "antd";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NetworkStatus from "../NetworkStatus.jsx";
const Home = React.lazy(() => import("../pages/home/Home.jsx"));

const Routing = () => {
  return (
    <>
      <NetworkStatus />
      <Suspense
        fallback={
          <div className="lazyloading">
            <Spin size="large" />
          </div>
        }
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routing;
