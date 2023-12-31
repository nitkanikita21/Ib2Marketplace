"use client";

import { get } from "@/hooks/fetchers";
import { Badge, Button, Col, Container, Loading, Row, Table, Text, User, useTheme } from "@nextui-org/react";
import useSWR from "swr";
import { MdDelete } from "react-icons/md";
import { axiosClient } from "@/axios";


export default function AdminUsersPage() {
	console.log("BASE URL:", process.env.NEXT_PUBLIC_BASE_URL);
	const users = useSWR("/protected/admin/user/getAll", get);
	const { theme } = useTheme();


	if (users.error) {
		return <Container display='flex' justify='center' alignContent='center' gap={15}><Loading></Loading></Container>;
	}
	if (users.isLoading) {
		return <Container display='flex' justify='center' alignContent='center' gap={15}><Loading></Loading></Container>;
	}
	if (users.isValidating) {
		return <Container display='flex' justify='center' alignContent='center' gap={15}><Loading></Loading></Container>;
	}

	function getBadge(role: string) {
		switch (role) {
			case "member":
				return <Badge color={"primary"}>{role.toUpperCase()}</Badge>;

			case "moderator":
				return <Badge color={"success"}>{role.toUpperCase()}</Badge>;

			case "admin":
				return <Badge color={"error"}>{role.toUpperCase()}</Badge>;

			default:
				return <Badge color={"warning"}>UNKNOW</Badge>;
		}
	}

	function deleteUser(id: string) {
		axiosClient.post(`/protected/admin/user/${id}/delete`);
	}

	const body = users.data.map((e: any, i: number) => <Table.Row key={e.id}>
		<Table.Cell>
			<Text>{e.id}</Text>
		</Table.Cell>
		<Table.Cell>
			<User squared src={e.image} name={e.name} css={{ "p": 0 }}>
				{e.email}
			</User>
		</Table.Cell>
		<Table.Cell>
			{getBadge(e.role)}
		</Table.Cell>
		<Table.Cell>
			<Row gap={0.25}>
				<Col>
					<Button onPress={() => { deleteUser(e.id); }} auto={false} icon={<MdDelete size={24} color={theme?.colors.error.value}></MdDelete>} color="error" flat>
                            Видалити
					</Button>
				</Col>
			</Row>
		</Table.Cell>
	</Table.Row>);

	return <>
		<Container gap={15}>
			<Table>
				<Table.Header>
					<Table.Column width={30}>ID</Table.Column>
					<Table.Column>Користувач</Table.Column>
					<Table.Column>Роль</Table.Column>
					<Table.Column width={30}>Дії</Table.Column>
				</Table.Header>
				<Table.Body>
					{body}
				</Table.Body>
			</Table>
		</Container>
	</>;
}