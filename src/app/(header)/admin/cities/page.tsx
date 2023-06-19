"use client";

import LoadingPage from "@/app/loading/page";
import { get } from "@/hooks/fetchers";
import { Collapse, Container, Table, Text } from "@nextui-org/react";
import useSWR from 'swr'
import CitiesList from "./CitiesList";
import CitiesCreate from "./CitiesCreate";


export default function AdminCitiesPage() {
    return <>
        <Container>
            <Text h1>Менеджер міст</Text>

            <Collapse.Group accordion={false}>
                <Collapse title="Створення міста">
                    <CitiesCreate></CitiesCreate>
                </Collapse>
                <Collapse title="Список міст">
                    <CitiesList></CitiesList>
                </Collapse>
            </Collapse.Group>
        </Container>
    </>
}