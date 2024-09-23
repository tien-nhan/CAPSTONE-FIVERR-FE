import { message } from "antd";
import quanLyDanhMucProvider from "../../data-access/ql-danh-muc-provider";

export default {
  state: { dsNguoiDung: [] },
  reducers: {
    updateData(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    layDanhSachNguoiDung: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .layDanhSachNguoiDung(payload)
          .then((s) => {
            resolve(s);
            dispatch.quanLyDanhMuc.updateData({
              dsNguoiDung: payload.tuKhoa ? s.data : s,
            });
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    addUser: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .addUser(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    editUser: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .editUser(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    deleteUser: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .deleteUser(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },

    //cong viec
    layDanhSachCongViec: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .layDanhSachCongViec(payload)
          .then((s) => {
            resolve(s);
            dispatch.quanLyDanhMuc.updateData({
              dsCongViec: payload.tuKhoa ? s.data : s,
            });
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    themCongViec: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .themCongViec(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    suaCongViec: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .suaCongViec(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    xoaCongViec: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .xoaCongViec(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },

    //loai cong viec
    layDanhSachLoaiCongViec: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .layDanhSachLoaiCongViec(payload)
          .then((s) => {
            resolve(s);
            dispatch.quanLyDanhMuc.updateData({
              dsLoaiCongViec: payload.tuKhoa ? s.data : s,
            });
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    themLoaiCongViec: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .themLoaiCongViec(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    suaLoaiCongViec: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .suaLoaiCongViec(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    xoaLoaiCongViec: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .xoaLoaiCongViec(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },

    //dich vu
    layDanhSachDichVu: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .layDanhSachDichVu(payload)
          .then((s) => {
            resolve(s);
            dispatch.quanLyDanhMuc.updateData({
              dsDichVu: payload.tuKhoa ? s.data : s,
            });
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    themDichVu: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .themDichVu(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    suaDichVu: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .suaDichVu(payload)
          .then((s) => {
            message.success("Thành công!");
            resolve(s);
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    xoaDichVu: (payload = {}, state) => {
      return new Promise(async (resolve, reject) => {
        quanLyDanhMucProvider
          .xoaDichVu(payload)
          .then((s) => {
            message.success("Thành công!");
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
