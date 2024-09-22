import React, { useEffect } from "react";
import "./index.scss";
import Right from "./Right";
import Left from "./Left";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Index = () => {
  const { id } = useParams();

  const {
    congViec: { layCongViecChiTiet },
  } = useDispatch();
  
  useEffect(() => {
    if (!id) return;
    layCongViecChiTiet(id);
  }, [id]);

  return (
    <section className="job-detail">
      <div className="container d-flex justify-content-between">
        <Left />
        <Right/>
      </div>
    </section>
  );
};

export default Index;
