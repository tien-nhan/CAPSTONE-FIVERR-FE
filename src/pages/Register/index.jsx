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
    <section className="signup">
      <div className="container_form">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title-register">REGISTER</h2>
            <form
              className="register-form"
              id="register-form"
              autoComplete="off"
            >
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user me-3"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    required
                    placeholder="User Name"
                    onChange={onChange("username")}
                    value={state.username}
                  />
                  <div className="text-danger position-absolute mt-1"></div>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope me-3"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    onChange={onChange("email")}
                    value={state.email}
                  />
                  <div className="text-danger position-absolute mt-1"></div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key me-3"></i>
                <div
                  className="form-outline flex-fill mb-0"
                  style={{ position: "relative" }}
                >
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    name="Password"
                    required
                    placeholder="Password"
                    onChange={onChange("password")}
                    value={state.password}
                  />
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
                  <div className="text-danger position-absolute mt-1"></div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock me-3"></i>
                <div
                  className="form-outline flex-fill mb-0"
                  style={{ position: "relative" }}
                >
                  <input
                    type="password"
                    className="form-control"
                    id="password2"
                    name="password2"
                    required
                    placeholder="Your Password"
                    onChange={onChange("password2")}
                    value={state.password2}
                  />
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
                  <div className="text-danger position-absolute mt-1"></div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-phone me-3"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Your Phone"
                    onChange={onChange("phone")}
                    value={state.phone}
                  />
                  <div className="text-danger position-absolute mt-1"></div>
                </div>
              </div>
              <div id="gender" className="gender mb-4">
                <i className="fas fa-venus-mars me-3"></i>
                <div className="radio gender_inp">
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    onChange={(e) => setState({ gender: true })}
                  />
                  <label className="radio-label" htmlFor="male">
                    Male
                  </label>
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    onChange={() => setState({ gender: false })}
                  />
                  <label className="radio-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>

              <div className="form-group mt-2-frm">
                <input
                  type="checkbox"
                  required
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
                <label htmlFor="agree-term" className="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  I agree all statements in{" "}
                  <a href="#" className="term-service">
                    Terms of service
                  </a>
                </label>
              </div>

              <div className="form-group form-button">
                <button
                  className="btn btn-primary btn_register"
                  type="button"
                  onClick={onDangKy}
                >
                  Submit
                </button>
                <button
                  className="btn btn-primary btn_register"
                  type="button"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img
                src={
                  "https://demo5.cybersoft.edu.vn/static/media/signup.bd994738c4eb8deb2801.jpg"
                }
                alt="Sign Up"
                className="w-100"
              />
            </figure>
            <a className="signup-image-link" href="/login">
              I am already a member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
