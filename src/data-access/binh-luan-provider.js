import { client } from "../client/request";

export default {
  layBinhLuanTheoCongViec: (maCongViec) => {
    return new Promise((resolve, reject) => {
      client
        .get(`/api/binh-luan/lay-binh-luan-theo-cong-viec/${maCongViec}`)
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
  binhLuan: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/binh-luan`, payload)
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
