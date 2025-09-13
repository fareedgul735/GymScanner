import { Spin } from "antd";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NetworkStatus from "../NetworkStatus.jsx";
import NotFound from "../NotFound.jsx";
const Home = React.lazy(() => import("../pages/home/Home.jsx"));

const Routing = () => {
  return (
    <>
      <NetworkStatus />
      <Suspense
        fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <Spin size="large" className="scale-150" />
          </div>
        }
      ></Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
