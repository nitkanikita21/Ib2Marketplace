"use client";

import LoadingPage from "@/app/loading/page";
import { get } from "@/hooks/fetchers";
import { Container, Loading, Table, Text } from "@nextui-org/react";
import useSWR from 'swr'


export default function CitiesList() {
    const users = useSWR("/protected/admin/city/getAll", get)

    if (users.isLoading) {
        return <Loading></Loading>
    }
    if (users.isValidating) {
        return <Loading></Loading>
    }
    console.log("DATA", users.data)
    return <Table
        css={{
            height: "auto",
            minWidth: "100%",
        }}
    >
        <Table.Header>
            <Table.Column>ID</Table.Column>
            <Table.Column>Назва</Table.Column>
            <Table.Column>X</Table.Column>
            <Table.Column>Y</Table.Column>
        </Table.Header>
        <Table.Body>
            {users.data.map((e: any) => {
                return <Table.Row key={e.id}>
                    <Table.Cell>{e.id}</Table.Cell>
                    <Table.Cell>{e.name}</Table.Cell>
                    <Table.Cell>{e.x}</Table.Cell>
                    <Table.Cell>{e.y}</Table.Cell>
                </Table.Row>
            })}
        </Table.Body>
    </Table>

}