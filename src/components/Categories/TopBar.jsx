import React from "react";

const TopBar = () => {
  return (
    <div className="categories-topbar row justify-content-between">
      <div className="categories-topbar-dropdown col-lg-6 d-flex gap-2">
        {["Category", "Service Options", "Seller Details", "Delivery Time"].map(
          (title, index) => (
            <div className="categories-topbar-dropdown-filter" key={index}>
              <button
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                {title}
                <span>
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                  </svg>
                </span>
              </button>
              <ul className="dropdown-menu">
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item active">
                    All Categories
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item">
                    Web Programming
                  </a>
                  <span>(20,566)</span>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item">
                    Data Entry
                  </a>
                  <span>(12,566)</span>
                </li>
              </ul>
            </div>
          )
        )}
      </div>
      <div className="categories-topbar-toggle justify-content-end col-lg-6 d-flex gap-4 align-items-center">
        {["Pro services", "Local sellers", "Online sellers"].map(
          (title, index) => (
            <div className="toggle d-flex align-items-center" key={index}>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <span className="switch-title">{title}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TopBar;
