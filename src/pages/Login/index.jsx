import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Index = () => {
  const {
    auth: { onLogin },
  } = useDispatch();
  const navigate = useNavigate();

  const [state, _setState] = useState({});
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));
  const onChange = (key) => (e) => {
    const value = e?.target?.value;
    setState({ [key]: value });
  };
  const onDangKy = (e) => {
    e.preventDefault();
    try {
      navigate("/register");
    } catch (error) {}
  };
  const onDangNhap = (e) => {
    e.preventDefault();
    onLogin(state).then((s) => {
      navigate("/");
    });
  };
  return (
    <div className="container-custom">
      <div className="form-wrapper">
        <h1>Đăng nhập</h1>
        <form className="form" autoComplete="off">
          <div className="input-group">
            <div>Tài khoản</div>
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              placeholder=" "
              required
              onChange={onChange("email")}
              value={state.email}
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
          <div className="button-group">
            <button type="submit" onClick={onDangNhap}>
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
