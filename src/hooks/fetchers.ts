import { axiosClient } from "@/axios";

export const get = (url: string) => axiosClient
	.get(url)
	.then(res => res.data);

export const getWithToken = (url: string, token: String) => axiosClient
	.get(url, { "headers": { "Authorization": `Bearer ${token}` } })
	.then(res => res.data);

export const post = (url: string, data: any) => axiosClient
	.post(url, data)
	.then(res => res.data);