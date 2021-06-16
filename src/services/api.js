import axios from "axios";
import { API } from "../environment";

const requestApi = axios.create({
    baseURL: `${API}`
});

export default requestApi;