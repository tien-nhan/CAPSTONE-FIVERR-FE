import { client } from "../client/request";

export default {
  login: ({ email, password = "" }) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/auth/signin`, {
          email,
          password,
        })
        .then((s) => {
          if (s?.statusCode === 200) {
            resolve(s?.content);
          } else reject(s?.content);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  register: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`/api/auth/signup`, payload)
        .then((s) => {
          if (s?.statusCode === 200) {
            resolve(s?.content);
          } else reject(s?.content);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
