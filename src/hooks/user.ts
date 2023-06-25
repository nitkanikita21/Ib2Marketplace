import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { get as getFetchher } from "./fetchers";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { axiosClient } from "@/axios";

export function useReactiveUser(id: string): { data: { [key: string]: any }, isLoading: boolean, isError: boolean } {
	const { data, error, isLoading } = useSWR(`/protected/admin/user/${id}/get`, getFetchher);
	return {
		data,
		isLoading,
		"isError": error
	};
}
export function useUserMarket(id: string): { data: { [key: string]: any }, isLoading: boolean, isError: boolean } {
	const { data, error, isLoading } = useSWR(`/user/${id}/market`, getFetchher);
	return {
		data,
		isLoading,
		"isError": error
	};
}


export const useUserValidatorStore = create<{
	isValid: boolean,
	id: string,
	validate: () => void
	setId: (id: string) => void
}>()(
	devtools(
		persist(
			(set, get) => ({
				"isValid": true,
				"id": "",
				"validate": async () => {
					const res = await axiosClient.get(`/user/${get().id}/isValid`);
					set((state) => ({ "isValid": res.data.valid }));
				},
				"setId": (id) => {
					set((state) => ({ "id": id }));
				}
			}),
			{
				"name": "ib2-theme"
			}
		)
	)
);