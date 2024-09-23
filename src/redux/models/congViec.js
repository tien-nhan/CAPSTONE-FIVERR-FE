import { message } from "antd";
import congViecProvier from "../../data-access/cong-viec-provider";

export default {
  state: { congViec: {} },
  reducers: {
    updateData(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    layMenuLoaiCongViec: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        congViecProvier
          .layMenuLoaiCongViec()
          .then((s) => {
            resolve(s);
            dispatch.congViec.updateData({ menuLoaiCongViec: s });
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    layDanhSachCongViecTheoTen: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        congViecProvier
          .layDanhSachCongViecTheoTen(payload)
          .then((s) => {
            resolve(s);
            dispatch.congViec.updateData({ dsCongViec: s });
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    layDanhSachCongViecTheoMaLoai: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        congViecProvier
          .layDanhSachCongViecTheoMaLoai(payload)
          .then((s) => {
            resolve(s);
            dispatch.congViec.updateData({ dsCongViec: s });
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    layCongViecChiTiet: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        congViecProvier
          .layCongViecChiTiet(payload)
          .then((s) => {
            resolve(s);
            dispatch.congViec.updateData({ chiTietCongViec: s[0] });
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    thueCongViec: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        congViecProvier
          .thueCongViec(payload)
          .then((s) => {
            message.success("Thuê công việc thành công");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
  }),
};
