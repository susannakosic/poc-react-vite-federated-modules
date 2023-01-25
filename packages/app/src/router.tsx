import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const Router = () => {
  const OtherPage = React.lazy(() => import("./pages/Other"));
  const ContentfullyPage = React.lazy(() => import("./pages/Contentfully"));
  return (
    <Routes>
      {/* Since Home is statically imported, vite will bundle it in the main chunk */}
      <Route index element={<Home />} />
      {/* Since Other and Contentfully are dinamically imported, vite will bundle it in a separate chunk */}
      <Route
        path="/other"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <OtherPage />
          </Suspense>
        }
      />
      <Route
        path="/contentfully"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ContentfullyPage />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
