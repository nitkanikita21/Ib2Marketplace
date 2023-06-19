import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { get } from "./fetchers";

export function useReactiveUser(id: string): { data: {[key: string]: any}, isLoading: boolean, isError: boolean } {
	const { data, error, isLoading } = useSWR(`/protected/admin/user/${id}/get`, get);
	return {
		data,
		isLoading,
		"isError": error
	};
}
export function useReactiveUserStatus(id: string): { data: {[key: string]: any}, isLoading: boolean, isError: boolean } {
	const { data, error, isLoading } = useSWR(`/user/${id}/isValid`, get);
	return {
		data,
		isLoading,
		"isError": error
	};
}