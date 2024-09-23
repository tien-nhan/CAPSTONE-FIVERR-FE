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
      navigate("/categories");
    });
  };
  return (
    <section className="sign-in">
      <div className="container_form">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img
                src="https://demo5.cybersoft.edu.vn/static/media/signin.6f1c72291c1ec0817ded.jpg"
                alt="sign up"
                className="w-100"
              />
            </figure>
          </div>
          <div className="signin-form">
            <h2 className="form-title mb-5">Sign In to Fiverr</h2>
            <form className="login-form" id="login-form">
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                  />
                  <div className="text-danger position-absolute mt-1"></div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3"></i>
                <div
                  className="form-outline flex-fill mb-0"
                  style={{ position: "relative" }}
                >
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    placeholder="Your Password"
                  />
                  <div className="text-danger position-absolute mt-1"></div>
                  <button
                    type="button"
                    className="show"
                    style={{
                      position: "absolute",
                      top: "8.5px",
                      right: "10px",
                      border: "none",
                      opacity: 0.5,
                      background: "none",
                    }}
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
              <div className="form-group register d-flex justify-content-start align-items-baseline gap-3 ms-5 mt-5">
                <button
                  className="btn btn-success login"
                  type="button"
                  onClick={onDangNhap}
                >
                  Login
                </button>
                <a className="text_register" onClick={onDangKy}>
                  Register now?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
