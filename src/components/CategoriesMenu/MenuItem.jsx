import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ data = {} }) => {
  const navigate = useNavigate();
  return (
    <div className="categoriesmenu_li">
      <a className="links mb-0" href="/title/1">
        <p className="mb-0">{data.tenLoaiCongViec}</p>
      </a>
      {!!data.dsNhomChiTietLoai?.length && (
        <div className="categoriesmenu_li_jobdetail categoriesmenu_li_jobdetail_1">
          {data.dsNhomChiTietLoai.map((nhom) => (
            <div className="container-fluid d-flex flex-column" key={nhom.id}>
              <p className="categoriesmenu_li_jobdetail_detail container">
                {nhom.tenNhom}
              </p>
              {nhom.dsChiTietLoai?.map((chiTiet) => (
                <a
                  key={chiTiet.id}
                  className="categoriesmenu_li_jobdetail_detail_job container"
                  onClick={() => {
                    navigate(`/categories/${chiTiet.id}`);
                  }}
                >
                  {chiTiet.tenChiTiet}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MenuItem;
