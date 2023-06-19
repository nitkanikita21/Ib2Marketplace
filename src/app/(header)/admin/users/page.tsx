"use client";

import { get } from '@/hooks/fetchers';
import { Badge, Button, Col, Container, Row, Table, Text, User, useTheme } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import useSWR from 'swr'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { axiosClient } from '@/axios';


export default function AdminUsersPage() {
    const session = useSession()
    if (session.status != "authenticated") return <></>
    const users = useSWR("/protected/admin/user/getAll", get)
    const { theme } = useTheme();

    if (users.isLoading) return <></>

    console.log(users.data)

    function getBadge(role: string) {
        switch (role) {
            case "member":
                return <Badge color={'primary'}>{role.toUpperCase()}</Badge>
                break;

            case "moderator":
                return <Badge color={'success'}>{role.toUpperCase()}</Badge>
                break;

            case "admin":
                return <Badge color={'warning'}>{role.toUpperCase()}</Badge>
                break;

            default:
                return <Badge color={'error'}>UNKNOW</Badge>
                break;
        }
    }

    function deleteUser(id: string) {
        axiosClient.post(`/protected/admin/user/${id}/delete`)
    }

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
                    {
                        (users.data as any[]).map((e: any) => {
                            return <Table.Row key={e.id}>
                                <Table.Cell>
                                    <Text>{e.id}</Text>
                                </Table.Cell>
                                <Table.Cell>
                                    <User squared src={e.image} name={e.name} css={{ p: 0 }}>
                                        {e.email}
                                    </User>
                                </Table.Cell>
                                <Table.Cell>
                                    {getBadge(e.role)}
                                </Table.Cell>
                                <Table.Cell>
                                    <Row gap={0.25}>
                                        <Col>
                                            <Button onPress={()=>{deleteUser(e.id)}} auto={false} icon={<MdDelete size={24} color={theme?.colors.error.value}></MdDelete>} color="error" flat>
                                                Видалити
                                            </Button>
                                        </Col>
                                    </Row>
                                </Table.Cell>
                            </Table.Row>
                        })
                    }
                </Table.Body>
            </Table>
        </Container>
    </>;
}