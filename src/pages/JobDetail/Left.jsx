import React, { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { Button, Collapse, Form, Input, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

const items = [
  {
    key: "1",
    label: "There are many passages but the majority?",
    children: (
      <div>
        Voluptates amet earum velit nobis aliquam laboriosam nihil debitis
        facere voluptatibus consectetur quae quasi fuga, ad corrupti libero
        omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
      </div>
    ),
  },
  {
    key: "2",
    label: "There are many passages but the majority?",
    children: (
      <div>
        Voluptates amet earum velit nobis aliquam laboriosam nihil debitis
        facere voluptatibus consectetur quae quasi fuga, ad corrupti libero
        omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
      </div>
    ),
  },
  {
    key: "3",
    label: "There are many passages but the majority?",
    children: (
      <div>
        Voluptates amet earum velit nobis aliquam laboriosam nihil debitis
        facere voluptatibus consectetur quae quasi fuga, ad corrupti libero
        omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
      </div>
    ),
  },
];

const Left = () => {
  const { chiTietCongViec = {} } = useSelector((state) => state.congViec);

  return (
    <div className="col-7 position-relative">
      <Breadcrumb />
      <div className="job-detail-info">
        <h1 className="job-title">{chiTietCongViec.tenCongViec}</h1>
        <SellerOverview chiTietCongViec={chiTietCongViec} />

        <div className="job-img mt-3">
          <img
            className="img-fluid w-100"
            src={chiTietCongViec.congViec?.hinhAnh}
            alt="..."
          />
        </div>
        <div className="check-out mobile mt-5">
          <div className="check-out-header">
            <div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#basic"
                    role="tab"
                  >
                    Basic
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link center"
                    data-bs-toggle="tab"
                    data-bs-target="#standard"
                    role="tab"
                  >
                    Standard
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#premium"
                    role="tab"
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
                {/* Basic Tab */}
                <div className="tab-pane active" id="basic" role="tabpanel">
                  <div>
                    <div className="price d-flex align-items-center justify-content-between">
                      <span className="title">Basic</span>
                      <span className="title">US$30</span>
                    </div>
                    <p className="description">
                      500 word article
                      <br />
                      US$30
                      <br />
                      This order includes a 500 word article based on your
                      chosen topic.
                      <br />
                      2 Days Delivery
                      <br />
                      1 Revision
                      <br />
                      Up to 500 words
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
                    <ul className="feature m-0 p-0">
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
                        <span>Good feature</span>
                      </li>
                      {/* Thêm các feature khác tương tự như trên */}
                    </ul>
                  </div>
                </div>

                {/* Standard Tab */}
                <div className="tab-pane" id="standard" role="tabpanel">
                  {/* Tương tự với nội dung cho Standard */}
                </div>

                {/* Premium Tab */}
                <div className="tab-pane" id="premium" role="tabpanel">
                  {/* Tương tự với nội dung cho Premium */}
                </div>
              </div>
            </form>
          </div>
          <div className="check-out-footer">
            <button className="submit">Continue (US$30)</button>
            <a href="#compare" className="compare">
              Compare Packages
            </a>
          </div>
        </div>
        <div className="job-description mt-5">
          <h2>About This Gig</h2>
          <div className="description">
            About this gig Welcome to my custom, modern, creative and unique
            logo design service. I do much appreciate for taking your valuable
            time to monitor my gig. Are you looking for a custom or professional
            logo for your business to give a new look and want to give boost
            your brand look so Yes this is the right place. Why choose me:
            Professional, Creative and unique logo design Eye-Catching and
            Customer Attractive. High Quality &amp; Perfect Design. Clean &amp;
            Smooth &amp; minimalist Wor
          </div>
        </div>
        <AboutSeller chiTietCongViec={chiTietCongViec} />
        <div className="FAQ mt-5">
          <h2>FAQ</h2>
          <Collapse items={items} />
        </div>
        <RatingSection chiTietCongViec={chiTietCongViec} />
      </div>
    </div>
  );
};

export default Left;

const SellerOverview = ({ chiTietCongViec }) => {
  return (
    <div className="seller-overview d-flex flex-wrap gap-3 align-items-center">
      <div className="seller-avatar">
        <img
          className="rounded-circle"
          width="30"
          src={chiTietCongViec.avatar}
          alt="avatar"
        />
      </div>
      <div className="seller-name">{chiTietCongViec.tenNguoiTao}</div>
      <div className="seller-level">Level 2 seller</div>
      <div className="seller-star-rating d-flex align-items-center">
        <div className="star d-flex">
          <ul
            className="ant-rate ant-rate-disabled"
            tabIndex="-1"
            role="radiogroup"
            style={{ color: "rgb(255, 179, 62)" }}
          >
            <Rate
              disabled
              value={chiTietCongViec.congViec?.saoCongViec}
              style={{ color: "rgb(255, 179, 62)" }}
            />
          </ul>
        </div>
        <div className="star-score">
          {chiTietCongViec.congViec?.saoCongViec}
        </div>
        <div className="rating">({chiTietCongViec.congViec?.danhGia})</div>
      </div>
      <div className="seller-ordered">4 Order in Queue</div>
    </div>
  );
};
const AboutSeller = ({ chiTietCongViec }) => {
  return (
    <div className="about-seller mt-5">
      <h2>About The Seller</h2>
      <div className="profile d-flex gap-3">
        <div className="profile-img">
          <img
            className="w-100 rounded-circle"
            src={chiTietCongViec.avatar}
            alt="Seller Avatar"
          />
        </div>
        <div className="profile-label">
          <h3 className="seller-name">{chiTietCongViec.tenNguoiTao}</h3>
          <p>{chiTietCongViec.tenChiTietLoai}</p>
          <div className="seller-star-rating d-flex align-items-center">
            <Rate
              disabled
              value={chiTietCongViec.congViec?.saoCongViec}
              style={{ color: "rgb(255, 179, 62)" }}
            />
            <div className="star-score">
              {chiTietCongViec.congViec?.saoCongViec}
            </div>
            <div className="rating">({chiTietCongViec.congViec?.danhGia})</div>
          </div>
          <button className="contact" type="primary">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

const ReviewItem = ({ data = {} }) => {
  return (
    <li className="row py-4">
      <div className="reviewer-avatar col-2">
        <img
          src={data.avatar}
          alt="Reviewer"
          className="rounded-circle w-100"
        />
      </div>
      <div className="reviewer-comment col-10">
        <div className="reviewer-name d-flex">
          <h3>{data.tenNguoiBinhLuan}</h3>
          <span className="star">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffb33e"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
              />
            </svg>
          </span>
          <span className="star-score">{data.saoBinhLuan}</span>
        </div>
        <div className="reviewer-country d-flex align-items-center">
          <img
            width="20"
            height="20"
            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png"
            alt="Country Flag"
            className="country-flag"
          />
          <div className="ms-2 country-name">Switzerland</div>
        </div>
        <div className="comment">
          <p>{data.noiDung}</p>
        </div>
        {data.ngayBinhLuan && dayjs(data.ngayBinhLuan).format("DD/MM/YYYY")}
        <div className="reviewer-helpful d-flex align-items-center gap-2">
          <div className="helpful-title">Helpful?</div>
          <div className="helpful-thumb d-flex align-items-center gap-2">
            <div className="yes d-flex align-items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z" />
              </svg>
              <span>Yes</span>
            </div>
            <div className="no d-flex align-items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z" />
              </svg>
              <span>No</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RatingSection = ({ chiTietCongViec = {} }) => {
  const [state, _setState] = useState({});
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));
  const {
    binhLuan: { layBinhLuanTheoCongViec, binhLuan },
  } = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { dsBinhLuanTheoCongViec } = useSelector((state) => state.binhLuan);
  useEffect(() => {
    if (!chiTietCongViec.id) return;
    layBinhLuanTheoCongViec(chiTietCongViec.id);
  }, [chiTietCongViec?.id]);

  const onChange = (key) => (e) => {
    const value = e?.target?.value || e;
    setState({ [key]: value });
  };
  const handleSubmit = async () => {
    await binhLuan({
      //   id: 0,
      maCongViec: chiTietCongViec?.id,
      maNguoiBinhLuan: auth.id,
      ngayBinhLuan: dayjs().format("YYYY-MM-DD"),
      noiDung: state.comment,
      saoBinhLuan: state.rate,
    });
    layBinhLuanTheoCongViec(chiTietCongViec.id);
  };

  return (
    <div className="rating-section">
      <div className="review-count d-flex justify-content-between">
        <div className="count d-flex align-items-center">
          <h2 className="mb-0 me-2">{`${chiTietCongViec.congViec?.danhGia} Reviews`}</h2>
          <div className="star d-flex align-items-center">
            <Rate
              allowHalf
              disabled
              value={chiTietCongViec.congViec?.saoCongViec}
              style={{ color: "rgb(255, 179, 62)" }}
            />
            <p className="star-score">
              {chiTietCongViec.congViec?.saoCongViec}
            </p>
          </div>
        </div>
        <div className="sort d-flex align-items-center">
          <span className="pre-title">Sort By</span>
          <select>
            <option value="recent">Most Recent</option>
            <option value="relevant">Most Relevant</option>
          </select>
        </div>
      </div>
      <div className="review-rating mt-3 row">
        <div className="col-md-6 col-sm-12">
          <div className="stars-counters">
            <table>
              <tbody>
                {[
                  { stars: 5, count: 144 },
                  { stars: 4, count: 0 },
                  { stars: 3, count: 0 },
                  { stars: 2, count: 1 },
                  { stars: 1, count: 0 },
                ].map(({ stars, count }) => (
                  <tr key={stars}>
                    <td className="star-title-container">
                      <button>{stars} Stars</button>
                    </td>
                    <td className="process-bar-container">
                      <div
                        className={`process-bar ${
                          stars === 5
                            ? "first"
                            : stars === 4
                            ? "second"
                            : stars === 3
                            ? "third"
                            : stars === 2
                            ? "fourth"
                            : "fifth"
                        }`}
                      ></div>
                    </td>
                    <td className="star-num">({count})</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="ranking">
            <h5>Rating Breakdown</h5>
            <ul className="m-0 p-0">
              {[
                { label: "Seller communication level", score: 2 },
                { label: "Recommend to a friend", score: 2 },
                { label: "Service as described", score: 2 },
              ].map(({ label, score }, index) => (
                <li key={index} className="d-flex justify-content-between pb-2">
                  <p>{label}</p>
                  <div className="d-flex">
                    <span className="star">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#ffb33e"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="star-score">{score}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="review-filter mt-5">
        <h3>Filters</h3>
      </div>
      <div className="review-comment">
        <ul className="review-comment-list">
          {dsBinhLuanTheoCongViec?.map((binhLuan) => (
            <ReviewItem key={binhLuan.id} data={binhLuan} />
          ))}
        </ul>
      </div>
      <div className="add-comment py-4">
        <div className="comment-rating mb-4 d-flex align-items-center justify-content-between">
          <h2 className="m-0">Leave some comments</h2>
          <div className="d-flex align-items-center gap-1">
            <Rate
              value={state.rate}
              onChange={onChange("rate")}
              style={{ color: "rgb(255, 179, 62)" }}
            />
            <h2 className="m-0">Rating</h2>
          </div>
        </div>
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="comment"
            rules={[{ required: true, message: "Please input your comment!" }]}
          >
            <Input.TextArea
              rows={5}
              value={state.comment}
              onChange={onChange("comment")}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="comment-submit">
              Comment
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
