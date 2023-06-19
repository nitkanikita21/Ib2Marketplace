import axios from "axios";

export const axiosClient = axios.create({
    baseURL: new URL("/api", process.env.NEXT_PUBLIC_BASE_URL).toString(),
    timeout: 15000,
    withCredentials: true
})