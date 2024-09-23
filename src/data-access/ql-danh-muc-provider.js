import { client } from "../client/request";

export default {
  layDanhSachNguoiDung: ({ tuKhoa }) => {
    return new Promise((resolve, reject) => {
      client
        .get(
          `/api/users${
            tuKhoa
              ? `/phan-trang-tim-kiem?keyword=${tuKhoa}&pageIndex=1&pageSize=1000`
              : ""
          }`
        )
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
  addUser: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/users`, payload)
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
  editUser: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .put(`/api/users/${payload.id}`, payload)
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
  addUser: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/users`, payload)
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
  deleteUser: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .delete(`/api/users?id=${payload.id}`)
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

  layDanhSachCongViec: ({ tuKhoa }) => {
    return new Promise((resolve, reject) => {
      client
        .get(
          `/api/cong-viec${
            tuKhoa
              ? `/phan-trang-tim-kiem?keyword=${tuKhoa}&pageIndex=1&pageSize=1000`
              : ""
          }`
        )
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
  themCongViec: (payload) => {
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
  suaCongViec: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .put(`/api/cong-viec/${payload.id}`, payload)
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
  xoaCongViec: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .delete(`/api/cong-viec/${payload.id}`)
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

  layDanhSachLoaiCongViec: ({ tuKhoa }) => {
    return new Promise((resolve, reject) => {
      client
        .get(
          `/api/loai-cong-viec${
            tuKhoa
              ? `/phan-trang-tim-kiem?keyword=${tuKhoa}&pageIndex=1&pageSize=1000`
              : ""
          }`
        )
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
  themLoaiCongViec: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/loai-cong-viec`, payload)
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
  suaLoaiCongViec: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .put(`/api/loai-cong-viec/${payload.id}`, payload)
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
  xoaLoaiCongViec: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .delete(`/api/loai-cong-viec/${payload.id}`)
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

  layDanhSachDichVu: ({ tuKhoa }) => {
    return new Promise((resolve, reject) => {
      client
        .get(
          `/api/thue-cong-viec${
            tuKhoa
              ? `/phan-trang-tim-kiem?keyword=${tuKhoa}&pageIndex=1&pageSize=1000`
              : ""
          }`
        )
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
  themDichVu: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/thue-cong-viec`, payload)
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
  suaDichVu: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .put(`/api/thue-cong-viec/${payload.id}`, payload)
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
  xoaDichVu: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .delete(`/api/thue-cong-viec/${payload.id}`)
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
