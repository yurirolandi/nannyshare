import requestApi from "./api";

// eslint-disable-next-line import/prefer-default-export
export const jungleServices = {
  postForm: (body) => {
    try {
      return requestApi
        .post("/challenge-newsletter/", body)
        .then((response) => response.data);
    } catch (error) {
      console.log("An error occurred while trying to send the form ", error);
      return error;
    }
  },
};
