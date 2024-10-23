import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Information from "../pages/Information";
import HomeCategories from "../pages/HomeCategories";
import PublicPage from "../pages/PublicPage";
import JobDetail from "../pages/JobDetail";
import QuanLyNguoiDung from "../pages/QuanLyNguoiDung";
import QuanLyCongViec from "../pages/QuanLyCongViec";
import QuanLyLoaiCongViec from "../pages/QuanLyLoaiCongViec";
import QuanLyDichVu from "../pages/QuanLyDichVu";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <>home</>
          </Suspense>
        }
      />

      <Route
        path="/login"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PublicPage />
          </Suspense>
        }
      >
        <Route
          path=""
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Login />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/register"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PublicPage />
          </Suspense>
        }
      >
        <Route
          path=""
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Register />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/jobDetail"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PublicPage />
          </Suspense>
        }
      >
        <Route
          path=":id"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <JobDetail />
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/categories"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PublicPage />
          </Suspense>
        }
      >
        <Route
          path=""
          element={
            <Suspense fallback={<div>loading...</div>}>
              <HomeCategories />
            </Suspense>
          }
        />
        <Route
          path=":id"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <HomeCategories />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/admin"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PrivateRoute />
          </Suspense>
        }
      >
        <Route
          path="quan-ly-nguoi-dung"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <QuanLyNguoiDung />
            </Suspense>
          }
        />
        <Route
          path="quan-ly-cong-viec"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <QuanLyCongViec />
            </Suspense>
          }
        />
        <Route
          path="quan-ly-loai-cong-viec"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <QuanLyLoaiCongViec />
            </Suspense>
          }
        />
        <Route
          path="quan-ly-dich-vu"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <QuanLyDichVu />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/thongtincanhan"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PrivateRoute />
          </Suspense>
        }
      >
        <Route
          path=""
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Information />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
