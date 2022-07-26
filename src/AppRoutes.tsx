import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "components";

const HomePage = React.lazy(() => import("pages/Index"));
const LoginPage = React.lazy(() => import("pages/Login/Login"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/search" element={<SearchPage />} />
					<Route path="/404" element={<NotFoundPage />} />
					<Route path="/500" element={<InternalServerErrorPage />} />
					<Route path="/hotels">
						<Route path=":id" element={<HotelDetailsPage />} />
					</Route>
					<Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
