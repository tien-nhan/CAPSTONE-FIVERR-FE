import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const [state, _setState] = useState({});
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));
  const navigate = useNavigate();

  const onSearch = () => {
    navigate(`/categories${state.search ? `?search=${state.search}` : ``}`);
  };

  return (
    <header className="header header-active">
      <div className="header_wrapper">
        <div className="header_row">
          <div className="left">
            <div className="d-flex">
              <div>
                <button
                  className="nav_icon"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                  </svg>
                </button>
                <div
                  className="offcanvas offcanvas-start"
                  tabIndex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header align-items-center">
                    <div className="d-flex gap-3">
                      <a className="btn btn-success w-100" href="/login">
                        Sign in
                      </a>
                    </div>
                    <button
                      type="button"
                      className="btn-close text-reset d-flex align-items-center"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      style={{ boxShadow: "none" }}
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="nav_item">
                      <div className="nav_item_ul d-flex flex-column">
                        <a
                          aria-current="page"
                          className="active"
                          href="/"
                          style={{ color: "rgb(27, 223, 115)" }}
                        >
                          Fiverr Pro
                        </a>
                        <a aria-current="page" className="active" href="/">
                          Explore
                        </a>
                        <a aria-current="page" className="active" href="/">
                          Messages
                        </a>
                        <a aria-current="page" className="active" href="/">
                          List
                        </a>
                        <a aria-current="page" className="active" href="/">
                          Orders
                        </a>
                      </div>
                    </div>
                    <div className="dropdown mt-3">
                      <div
                        className="dropdown-toggle"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                      >
                        Help & Resources
                      </div>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Help Center
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Fiverr Forum
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Fiverr Blogs
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Ask the Community
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Contact Support
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <a aria-current="page" className="logo active" href="/">
                <svg
                  width="89"
                  height="27"
                  viewBox="0 0 89 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#fff">
                    <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                  </g>
                  <g fill="#1dbf73">
                    <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="header_search">
              <div className="search_form">
                <div className="search">
                  <span>
                    <input
                      name="resultParam"
                      type="search"
                      className="inp"
                      placeholder="Find Services"
                      value={state.search}
                      onChange={(e) => setState({ search: e.target.value })}
                    />
                  </span>
                </div>
                <button className="btn" onClick={onSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <nav className="header_navbar">
              <ul className="ul">
              
              <li className="li_1">US$ USD</li>
                <li className="li_1">Become a Seller</li>
                <li>
                  <a href="/login">Sign in</a>
                </li>
                <li className="join">
                  <a href="/register">Join</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
