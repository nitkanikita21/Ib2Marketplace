"use client";

import { Dropdown } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiFillShopping, AiFillTags } from "react-icons/ai";
import { FaUsers, FaCity } from "react-icons/fa";

export default function AdminMenu() {
	const { "data": session, status, update } = useSession();
	const router = useRouter();
	if (status != "authenticated") return <></>;
	if (session.user.role != "admin") return <></>;


	return <Dropdown>
		<Dropdown.Button flat color={"warning"}>Адмін меню</Dropdown.Button>
		<Dropdown.Menu onAction={(key) => {
			router.push(`/admin/${key}`);
		}}>
			<Dropdown.Item icon={<FaCity/>} key="cities">Менеджер міст</Dropdown.Item>
			<Dropdown.Item icon={<AiFillTags/>} key="tags">Менеджер тегів</Dropdown.Item>
			<Dropdown.Item icon={<FaUsers/>} key="users">Менеджер користувачів</Dropdown.Item>
			<Dropdown.Item icon={<AiFillShopping/>} key="shops">Менеджер магазинів</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>;
}