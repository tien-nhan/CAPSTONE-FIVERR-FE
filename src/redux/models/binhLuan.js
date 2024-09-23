import { message } from "antd";
import binhLuanProvier from "../../data-access/binh-luan-provider";

export default {
  state: { binhLuan: {} },
  reducers: {
    updateData(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    layBinhLuanTheoCongViec: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        binhLuanProvier
          .layBinhLuanTheoCongViec(payload)
          .then((s) => {
            resolve(s);
            dispatch.binhLuan.updateData({ dsBinhLuanTheoCongViec: s });
          })
          .catch((e) => {
            message.error(e.content);
            reject(e);
          });
      });
    },
    binhLuan: (payload, state) => {
      return new Promise(async (resolve, reject) => {
        binhLuanProvier
          .binhLuan(payload)
          .then((s) => {
            message.success("Bình luận thành công");
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
