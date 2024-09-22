import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Films from "../pages/Films";
import AddNewFilm from "../pages/AddNewFilm";
import AddNewNguoiDung from "../pages/AddNewNguoiDung";
import ShowTime from "../pages/ShowTime";
import Information from "../pages/Information";
import QuanLyNguoiDung from "../pages/QuanLyNguoiDung";
import Profile from "../pages/Profile";
import HomeCategories from "../pages/HomeCategories";
import PublicPage from "../pages/PublicPage";
import JobDetail from "../pages/JobDetail";

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
        path="/profile"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Profile />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <Register />
          </Suspense>
        }
      />
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
          path="films"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Films />
            </Suspense>
          }
        />
        <Route
          path="films/addnew"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <AddNewFilm />
            </Suspense>
          }
        />
        <Route
          path="films/edit/:maPhim"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <AddNewFilm />
            </Suspense>
          }
        />
        <Route
          path="films/showtime/:maPhim"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <ShowTime />
            </Suspense>
          }
        />
        <Route
          path="quanlynguoidung"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <QuanLyNguoiDung />
            </Suspense>
          }
        />
        <Route
          path="quanlynguoidung/addnew"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <AddNewNguoiDung />
            </Suspense>
          }
        />
        <Route
          path="quanlynguoidung/edit"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <AddNewNguoiDung />
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
