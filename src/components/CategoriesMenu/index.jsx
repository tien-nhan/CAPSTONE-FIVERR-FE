import React, { useEffect } from "react";
import MenuItem from "./MenuItem";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const {
    congViec: { layMenuLoaiCongViec },
  } = useDispatch();
  const { menuLoaiCongViec } = useSelector((state) => state.congViec);
  useEffect(() => {
    layMenuLoaiCongViec();
  }, []);

  return (
    <section className="CategoriesMenu">
      <div className="categoriesmenu_wrapper">
        <nav className="categoriesmenu_row">
          <div className="categoriesmenu_ul">
            {menuLoaiCongViec?.map((congViec) => (
              <MenuItem key={congViec.id} data={congViec} />
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Index;
