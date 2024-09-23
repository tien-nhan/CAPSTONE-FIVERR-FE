import { client } from "../client/request";

export default {
  layMenuLoaiCongViec: () => {
    return new Promise((resolve, reject) => {
      client
        .get(`/api/cong-viec/lay-menu-loai-cong-viec`)
        .then((s) => {
          if (s?.statusCode <= 400) {
            resolve(s?.content);
          } else reject(s?.content);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  layDanhSachCongViecTheoTen: ({ tenCongViec }) => {
    return new Promise((resolve, reject) => {
      client
        .get(`/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`)
        .then((s) => {
          if (s?.statusCode <= 400) {
            resolve(s?.content);
          } else reject(s?.content);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  layDanhSachCongViecTheoMaLoai: ({ maChiTietLoai }) => {
    return new Promise((resolve, reject) => {
      client
        .get(`/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`)
        .then((s) => {
          if (s?.statusCode <= 400) {
            resolve(s?.content);
          } else reject(s?.content);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  layCongViecChiTiet: (id) => {
    return new Promise((resolve, reject) => {
      client
        .get(`/api/cong-viec/lay-cong-viec-chi-tiet/${id}`)
        .then((s) => {
          if (s?.statusCode <= 400) {
            resolve(s?.content);
          } else reject(s?.content);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  thueCongViec: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/cong-viec`, payload)
        .then((s) => {
          if (s?.statusCode <= 400) {
            resolve(s?.content);
          } else reject(s?.content);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
