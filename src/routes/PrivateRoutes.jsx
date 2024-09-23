import {
  CaretDownOutlined,
  CaretUpOutlined,
  FileOutlined,
  LogoutOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Popover } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import "./index.scss";

const PrivateRoute = () => {
  const [state, _setState] = useState({ moreMenu: false });
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));
  const { auth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const actions = [
    // {
    //   icon: <UserOutlined />,
    //   label: "Thông tin cá nhân",
    //   onClick: () => {
    //     navigate("/thongtincanhan");
    //   },
    // },
    {
      icon: <LogoutOutlined />,
      label: "Đăng xuất",
      onClick: () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("auth");
        navigate("/login");
      },
    },
  ];
  return auth?.role === "ADMIN" ? (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <nav className="admin-nav">
          <ul>
            <li>
              <Link to="/admin/quan-ly-nguoi-dung" className="admin-nav-item">
                Quản lý người dùng
              </Link>
            </li>
            <li>
              <Link to="/admin/quan-ly-cong-viec" className="admin-nav-item">
                Quản lý công việc
              </Link>
            </li>
            <li>
              <Link
                to="/admin/quan-ly-loai-cong-viec"
                className="admin-nav-item"
              >
                Quản lý loại công việc
              </Link>
            </li>
            <li>
              <Link to="/admin/quan-ly-dich-vu" className="admin-nav-item">
                Quản lý dịch vụ
              </Link>
            </li>
            {/* <li>
              <Link to="/admin/quan-ly-dich-vu" className="admin-nav-item">
                Quản lý dịch vụ
              </Link>
            </li> */}
          </ul>
        </nav>
      </aside>
      <div className="admin-main-content">
        <nav className="admin-top-nav">
          <div className="admin-actions">
            <Popover
              placement="bottomRight"
              content={actions.map((action, index) => (
                <li key={index} onClick={action.onClick}>
                  <span className="admin-action-icon">{action.icon}</span>
                  <span style={{ marginLeft: "12px" }}>{action.label}</span>
                </li>
              ))}
            >
              <Avatar icon={<UserOutlined />} />
            </Popover>
          </div>
        </nav>
        <main className="admin-content-area">
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
