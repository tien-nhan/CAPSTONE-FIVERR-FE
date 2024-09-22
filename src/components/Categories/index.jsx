import React, { useEffect } from "react";
import "./index.scss";
import TopBar from "./TopBar";
import Sort from "./Sort";
import Services from "./Services";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const { id } = useParams();
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return params.get("search") || "";
  };

  const {
    congViec: { layDanhSachCongViecTheoMaLoai, layDanhSachCongViecTheoTen },
  } = useDispatch();
  const { dsCongViec } = useSelector((state) => state.congViec);
  useEffect(() => {
    const search = getQueryParams();
    if (!search && !id) return;
    id
      ? layDanhSachCongViecTheoMaLoai({ maChiTietLoai: id })
      : layDanhSachCongViecTheoTen({ tenCongViec: search });
  }, [location.search, id]);

  return (
    <section className="categories">
      <div className="container">
        <TopBar />
        <Sort />
        <Services listData={dsCongViec} />
      </div>
    </section>
  );
};

export default Index;
