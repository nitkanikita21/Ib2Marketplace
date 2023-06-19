"use client";

import LoadingPage from "@/app/loading/page";
import { axiosClient } from "@/axios";
import { get } from "@/hooks/fetchers";
import { Button, Col, Container, Input, Row, Spacer, Table, Text } from "@nextui-org/react";
import { useState } from "react";
import useSWR from "swr";


export default function CitiesCreate() {

	const [name, setName] = useState<string | undefined>(undefined);
	const [x, setX] = useState<number>(0);
	const [y, setY] = useState<number>(0);

	function createCity() {
		if (name != undefined) {
			axiosClient.post("/protected/admin/city/create", { name, x, y });
		}
	}

	return <>
		<Input
			label="Назва міста"
			required
			placeholder="Київ"
			value={name}
			onChange={(e) => setName(e.target.value)}
			helperText={name == undefined ? "Потрібно вказати!" : ""}
		/>
		<Spacer y={1} />
		<Row gap={0} css={{ "w": "25%" }}>
			<Col >
				<Input
					type="number"
					label="X"
					required
					value={x}
				/>
			</Col>
			<Spacer y={1} />

			<Col>
				<Input
					type="number"
					label="Y"
					required
					value={y}
				/>
			</Col>

		</Row>
		<Spacer y={1} />
		<Col>
			<Button onPress={createCity}>
                Створити
			</Button>
		</Col>
		<Spacer y={1} />
	</>;

}