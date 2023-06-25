"use client";

import { Navbar, Text, Button, Switch, User, Avatar, Dropdown, Row, Tooltip } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useThemeStore } from "../../theme";
import { useRouter } from "next/navigation";
import AdminMenu from "../user/AdminMenu";
import UserMenu from "../user/UserMenu";
import Link from "next/link";


export default function NavbarLayout() {
	const session = useSession();
	const themeStore = useThemeStore();
	const router = useRouter();

	if (session.status == "loading") return <></>;

	return <>
		<Navbar variant={"sticky"}>
			<Navbar.Brand>
				<Link href={"/"}><Text h2 b>ІвентБокс Маркетплейс</Text></Link>
			</Navbar.Brand>
			<Navbar.Content>
				<Tooltip content="Змінити тему" placement="bottom">
					<Switch
						size="xl"
						checked={themeStore.darkTheme}
						iconOn={<BsFillMoonFill />}
						iconOff={<BsFillSunFill />}
						onChange={() => { themeStore.switchTheme(!themeStore.darkTheme); }}
					/>
				</Tooltip>
				{
					session.status == "authenticated" ?
						<>
							<AdminMenu session={session.data!!} />
							<UserMenu session={session.data!!} />
							<Navbar.Item>
								<Button flat onPress={() => { router.push("/user"); }}>{session.data.user?.name}</Button>
							</Navbar.Item>
							<Navbar.Item>
								<Button color={"error"} onPress={() => { signOut({callbackUrl: "/"}); }}>Вихід</Button>
							</Navbar.Item>
						</>
						:
						<>
							<Navbar.Item>
								<Button flat onPress={() => { signIn(); }}>Вхід</Button>
							</Navbar.Item>
						</>
				}
			</Navbar.Content>
		</Navbar>
	</>;
}