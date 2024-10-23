import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const [state, _setState] = useState({ menuVisible: false });
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const offcanvasRef = useRef(null);

  const onSearch = () => {
    navigate(`/categories${state.search ? `?search=${state.search}` : ``}`);
  };

  const handleClickOutside = (event) => {
    if (
      offcanvasRef.current &&
      !offcanvasRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setState({ menuVisible: false });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header header-active">
      <div className="header_wrapper">
        <div className="header_row">
          <div className="left">
            <div className="d-flex align-items-center">
              <div>
                <button
                  ref={buttonRef}
                  className="nav_icon"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                  onClick={() => {
                    setState({ menuVisible: !state.menuVisible });
                  }}
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
                  ref={offcanvasRef}
                  className={`offcanvas offcanvas-start ${
                    state.menuVisible && "show"
                  }`}
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
                      onClick={() => {
                        setState({ menuVisible: false });
                      }}
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
                {state.menuVisible && (
                  <div className={`offcanvas-backdrop fade show`}></div>
                )}
              </div>
              <a aria-current="page" className="logo active" href="/">
                <svg
                  width="89"
                  height="27"
                  // viewBox="0 0 89 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 400"
                >
                  <circle cx="200" cy="200" fill="#00b22d" r="200" />
                  <g fill="#fff">
                    <path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z" />
                    <path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z" />
                    <circle cx="104.6" cy="163" r="9" />
                    <path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z" />
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
