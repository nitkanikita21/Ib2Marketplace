"use client";

import DevStage from "@/components/DevStage";
import NavbarLayout from "@/components/layout/Navbar";
import ProductCard from "@/components/product/ProductCard";
import { Badge, Card, Container, Grid, Row, Text } from "@nextui-org/react";

export default function RootPage() {

    return <>
        <NavbarLayout></NavbarLayout>
        <Container xs display="flex" responsive fluid={false} alignItems="flex-start">
            <DevStage></DevStage>
        </Container>
        <Container alignItems="center">
            <Grid.Container gap={1}>
                <Grid>
                    <ProductCard isNew price={64} title="Що? КУПУЙ ЗАРАЗ" urlImage="https://i.imgur.com/wJwgdF6.png"/>
                </Grid>
                <Grid>
                    <ProductCard price={16} title="Супер мега кирка" urlImage="https://i.imgur.com/K9kiN72.png"/>
                </Grid>
                <Grid>
                    <ProductCard isNew price={64} title="Хаха ну і рофл" urlImage="https://cdn.discordapp.com/attachments/1119387387613691974/1119387387869540493/silk_bo.png"/>
                </Grid>
            </Grid.Container>
        </Container>
    </>
}