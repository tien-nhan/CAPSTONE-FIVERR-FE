import React from "react";
import Breadcrumb from "./Breadcrumb";
import { Rate } from "antd";
import { useSelector } from "react-redux";

const Left = () => {
  const { chiTietCongViec = {} } = useSelector((state) => state.congViec);

  return (
    <div className="col-7 position-relative">
      <Breadcrumb />
      <div className="job-detail-info">
        <h1 className="job-title">{chiTietCongViec.tenCongViec}</h1>
        <SellerOverview chiTietCongViec={chiTietCongViec} />
        <div class="job-img mt-3">
          <img
            class="img-fluid w-100"
            src={chiTietCongViec.congViec?.hinhAnh}
            alt="..."
          />
        </div>
        <div class="job-description mt-5">
          <h2>About This Gig</h2>
          <div class="description">
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
        <AboutSeller chiTietCongViec={chiTietCongViec}/>
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
const AboutSeller = ({
  avatarUrl,
  sellerName,
  sellerRole,
  rating,
  orderCount,
}) => {
  return (
    <div className="about-seller mt-5">
      <h2>About The Seller</h2>
      <div className="profile d-flex gap-3">
        <div
          className="profile-img"
          style={{ width: "110px", height: "110px" }}
        >
          <img
            className="w-100 rounded-circle"
            src={avatarUrl}
            alt="Seller Avatar"
          />
        </div>
        <div className="profile-label">
          <h3 className="seller-name">{sellerName}</h3>
          <p>{sellerRole}</p>
          <div className="seller-star-rating d-flex align-items-center">
            <Rate
              disabled
              value={rating}
              style={{ color: "rgb(255, 179, 62)" }}
            />
            <div className="star-score">{rating}</div>
            <div className="rating">({orderCount})</div>
          </div>
          <button className="contact" type="primary">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};
