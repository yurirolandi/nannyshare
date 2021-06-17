import requestApi from "./api";

export const jungleServices = {
    postForm: (body) => {
        try {
            return requestApi.post("/challenge-newsletter/", body).then((response) => {
                return response.data
            })
        } catch (error) {
            console.log("An error occurred while trying to send the form ", error);
            return error;
        }
    }
}