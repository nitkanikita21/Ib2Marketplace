"use client";

import { Button, Card, Container, Loading, Text } from "@nextui-org/react";
import { signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { BsDiscord } from "react-icons/bs";

export default function SignIn() {
	function loginDiscord() {
		signIn("discord", { callbackUrl: "/" });
	}
	return <>
		<Container css={{ "minHeight": "100vh" }} fluid display="flex" justify="center" alignItems="center">
			{/* <Loading size="xl" >Очікуємо вхід</Loading> */}
			<Card css={{ mw: "25%" }}>
				<Card.Header>
					<Container display="flex" justify="center" alignItems="center">
						<Text h4>Вхід в систему</Text>
					</Container>
				</Card.Header>
				<Card.Divider />
				<Card.Body>
					<Button onPress={loginDiscord} icon={<BsDiscord size={24} />} color="primary">
						Discord
					</Button>
				</Card.Body>
			</Card>
		</Container>
	</>;
}