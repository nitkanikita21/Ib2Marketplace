import { useUserMarket } from "@/hooks/user";
import { Dropdown } from "@nextui-org/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { AiFillShopping } from "react-icons/ai";
import { BsBasket3Fill } from "react-icons/bs";

export default function UserMenu({ session }: { session: Session }) {
	const router = useRouter();
	console.log(session.user.id);
	const market = useUserMarket(session.user.id);

	const points = [];

	points.push(
		<Dropdown.Item icon={<BsBasket3Fill />} key="basket">Кошик</Dropdown.Item>,
		<Dropdown.Item icon={<AiFillShopping />} key="market">Ваш маркет</Dropdown.Item>
	);

	return <Dropdown >
		<Dropdown.Button flat color={"success"}>Меню</Dropdown.Button>
		<Dropdown.Menu onAction={(key) => {
			router.push(`/user/${key}`);
		}}>
			{points.map(e => e)}
		</Dropdown.Menu>
	</Dropdown>;
}