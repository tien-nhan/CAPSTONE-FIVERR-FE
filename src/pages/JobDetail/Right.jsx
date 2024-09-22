import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Right = () => {
  const navigate = useNavigate();
  const [state, _setState] = useState({ activeTab: "basic" });
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));
  const {
    congViec: { thueCongViec },
  } = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { chiTietCongViec = {} } = useSelector((state) => state.congViec);

  const handleSubmit = () => {
    if (auth?.id) {
      thueCongViec({
        id: chiTietCongViec?.id,
        maCongViec: chiTietCongViec.congViec?.maChiTietLoaiCongViec,
        maNguoiThue: auth.id,
        ngayThue: dayjs().format("YYYY-MM-DD"),
        hoanThanh: false,
      });
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="col-4">
      <div className="check-out">
        <div className="check-out-header">
          <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    state.activeTab === "basic" ? "active" : ""
                  }`}
                  data-bs-toggle="tab"
                  data-bs-target="#basic"
                  role="tab"
                  onClick={() => setState({ activeTab: "basic" })}
                >
                  Basic
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    state.activeTab === "standard" ? "active" : ""
                  }`}
                  data-bs-toggle="tab"
                  data-bs-target="#standard"
                  role="tab"
                  onClick={() => setState({ activeTab: "standard" })}
                >
                  Standard
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    state.activeTab === "premium" ? "active" : ""
                  }`}
                  data-bs-toggle="tab"
                  data-bs-target="#premium"
                  role="tab"
                  onClick={() => setState({ activeTab: "premium" })}
                >
                  Premium
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="check-out-body">
          <form action="">
            <div className="tab-content">
              <div
                className={`tab-pane ${
                  state.activeTab === "basic" ? "active" : ""
                }`}
                id="basic"
                role="tabpanel"
              >
                <div>
                  <div className="price d-flex align-items-center justify-content-between">
                    <span className="title">Basic</span>
                    <span className="title">{`US$${chiTietCongViec.congViec?.giaTien}`}</span>
                  </div>
                  <p className="description">
                    {chiTietCongViec.congViec?.moTaNgan}
                  </p>
                  <div className="additional-info d-flex gap-4 mb-3">
                    <div className="delivery d-flex align-items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                        <path d="M9 4H7v5h5V7H9V4z"></path>
                      </svg>
                      <span>14 Days Delivery</span>
                    </div>
                    <div className="revision d-flex align-items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                        <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                      </svg>
                      <span>Unlimited Revisions</span>
                    </div>
                  </div>
                  <ul className="fearture m-0 p-0">
                    <li className="d-flex align-items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`tab-pane ${
                  state.activeTab === "standard" ? "active" : ""
                }`}
                id="standard"
                role="tabpanel"
              >
                <div>
                  <div className="price d-flex align-items-center justify-content-between">
                    <span className="title">Standard</span>
                    <span className="title">{`US$${chiTietCongViec.congViec?.giaTien}`}</span>
                  </div>
                  <p className="description">
                    {chiTietCongViec.congViec?.moTaNgan}
                  </p>
                  <div className="additional-info d-flex gap-4 mb-3">
                    <div className="delivery d-flex align-items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                        <path d="M9 4H7v5h5V7H9V4z"></path>
                      </svg>
                      <span>14 Days Delivery</span>
                    </div>
                    <div className="revision d-flex align-items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                        <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                      </svg>
                      <span>Unlimited Revisions</span>
                    </div>
                  </div>
                  <ul className="fearture m-0 p-0">
                    <li className="d-flex align-items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`tab-pane ${
                  state.activeTab === "premium" ? "active" : ""
                }`}
                id="premium"
                role="tabpanel"
              >
                <div>
                  <div className="price d-flex align-items-center justify-content-between">
                    <span className="title">Premium</span>
                    <span className="title">{`US$${chiTietCongViec.congViec?.giaTien}`}</span>
                  </div>
                  <p className="description">
                    {chiTietCongViec.congViec?.moTaNgan}
                  </p>
                  <div className="additional-info d-flex gap-4 mb-3">
                    <div className="delivery d-flex align-items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                        <path d="M9 4H7v5h5V7H9V4z"></path>
                      </svg>
                      <span>14 Days Delivery</span>
                    </div>
                    <div className="revision d-flex align-items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                        <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                      </svg>
                      <span>Unlimited Revisions</span>
                    </div>
                  </div>
                  <ul className="fearture m-0 p-0">
                    <li className="d-flex align-items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="check-out-footer">
          <button type="button" className="submit" onClick={handleSubmit}>
            {`Continue $${chiTietCongViec.congViec?.giaTien}`}
          </button>
          <a href="#compare" className="compare">
            Compare Packages
          </a>
        </div>
      </div>
    </div>
  );
};

export default Right;
