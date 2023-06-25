"use client";

import { get } from "@/hooks/fetchers";
import { Button, Container, Grid, Input, Loading, Modal, Spacer, Text, Textarea, useModal } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";
import { BsPlus } from "react-icons/bs";
import MarketCreator from "./MarketCreator";
import { useUserMarket } from "@/hooks/user";

export default function MarketPage() {
	const session = useSession();
	const market = useUserMarket(session.data?.user.id);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");


	if (market.data == null) {
		return <>
			<Container css={{ "minHeight": "80vh" }} direction="column" fluid display="flex" justify="center" alignItems="center">
				<Text>У вас немає маркету</Text>
				<Spacer y={0.8} />
				<MarketCreator visibleButton={market.data == null} />
			</Container>
		</>;
	}
	if (market.isLoading) {
		return <>
			<Container css={{ "minHeight": "80vh" }} fluid display="flex" justify="center" alignItems="center">
				<Text><Loading size="xl">Завнтаження інформації</Loading></Text>
			</Container>
		</>;
	}
	if (name == "") {
		setName(market.data.name);
	}
	if (description == "") {
		setDescription(market.data.description);
	}

	return <>
		<Spacer y={2} />
		<Container>
			<Grid.Container gap={2} direction="column">
				<Grid>
					<Input
						size="xl"
						value={name}
						onChange={(e) => { setName(e.target.value); }}
						width="100%"
						labelPlaceholder="Назва"
					/>
				</Grid>
				<Grid>
					<Textarea
						color="primary"
						labelPlaceholder="Опис"
						value={description}
						onChange={(e) => { setDescription(e.target.value); }}
						width="100%"
					/>
				</Grid>
				<Grid>
					<Button>
						Зберегти інформацію
					</Button>
				</Grid>
			</Grid.Container>
		</Container>
	</>;
}