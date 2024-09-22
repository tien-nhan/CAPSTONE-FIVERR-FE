import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Index = () => {
  const {
    auth: { onRegister },
  } = useDispatch();

  const navigate = useNavigate();
  const [state, _setState] = useState({});
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));

  const onChange = (key) => (e) => {
    const value = e?.target?.value;
    setState({ [key]: value });
  };
  const onDangKy = async (e) => {
    e.preventDefault();
    try {
      await onRegister(state);
      navigate("/login");
    } catch (error) {}
  };
  return (
    <div className="container-custom">
      <div className="form-wrapper">
        <h1>Đăng ký</h1>
        <form className="form" autoComplete="off">
          <div className="input-group">
            <div>Tài khoản</div>
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              placeholder=" "
              required
              onChange={onChange("username")}
              value={state.username}
            />
          </div>
          <div className="input-group">
            <div>Mật khẩu</div>
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              placeholder=" "
              onChange={onChange("password")}
              value={state.password}
            />
          </div>
          <div className="input-group">
            <div>Nhập lại mật khẩu</div>
            <input
              type="password"
              name="floating_password2"
              id="floating_password2"
              placeholder=" "
              onChange={onChange("password2")}
              value={state.password2}
            />
          </div>
          <div className="input-group">
            <div>Họ tên</div>
            <input
              type="text"
              name="floating_hoten"
              id="floating_hoten"
              placeholder=" "
              onChange={onChange("name")}
              value={state.name}
            />
          </div>
          <div className="input-group">
            <div>Email</div>
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              placeholder=" "
              onChange={onChange("email")}
              value={state.email}
            />
          </div>
          <div className="input-group">
            <div>Số điện thoại</div>
            <input
              name="floating_sdt"
              id="floating_sdt"
              placeholder=" "
              onChange={onChange("phone")}
              value={state.phone}
            />
          </div>
          <div className="button-group">
            <button type="submit" onClick={() => navigate("/login")}>
              Đăng nhập
            </button>
            <button type="button" onClick={onDangKy}>
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
