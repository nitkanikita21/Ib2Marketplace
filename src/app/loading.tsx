"use client";

import { Col, Container, Loading, Row, Spacer } from "@nextui-org/react";

export default function LoadingPlaceholder() {
    return <>
        <Container css={{ minHeight: '100vh' }} fluid display="flex" justify="center" alignItems="center">
            <Loading size="xl" >Завантаження сторінки</Loading>
        </Container>
    </>
}