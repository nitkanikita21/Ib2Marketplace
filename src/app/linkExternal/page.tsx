"use client";

import { Button, Card, Col, Container, Row, Spacer, Text } from "@nextui-org/react";
import { BiLinkExternal } from "react-icons/bi";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function LinkExternalPage() {
	const params = useSearchParams();
	const router = useRouter();
	const toUrl = params.get("targetUrl") ?? "/";

	function leaveSite() {
		router.push(toUrl);
	}
	return <>
		<Container css={{ "minHeight": "100vh" }} fluid display="flex" justify="center" alignItems="center">
			{/* <Loading size="xl" >Очікуємо вхід</Loading> */}
			<Card css={{ mw: "25%" }}>
				<Card.Header>
					<Container display="flex" justify="center" alignItems="center">
						<Text h4>Ви покидаєте сайт!</Text>
					</Container>
				</Card.Header>
				<Card.Divider />
				<Card.Body>
					<Row css={{display: "flex", flexDirection: "column", alignItems: "center"}} wrap="nowrap" justify="center">
						<Text>Будьте обережні! Ми не несемо відповідальність за те, куди ви збираєтесь перейти</Text>
					</Row>
					<Spacer y={1.2} />
					<Button onPress={leaveSite} icon={<BiLinkExternal size={24} />} color="primary">
						Перейти за посиланням
					</Button>
				</Card.Body>
			</Card>
		</Container>
	</>;
}