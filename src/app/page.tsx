"use client";

import DevStage from "@/components/DevStage";
import NavbarLayout from "@/components/layout/Navbar";
import ProductCard from "@/components/product/ProductCard";
import { Badge, Card, Col, Container, Grid, Row, Text } from "@nextui-org/react";
import { BsBasket3Fill } from "react-icons/bs";


export default function RootPage() {

	return <>
		<NavbarLayout></NavbarLayout>
		<Container xs display="flex" responsive fluid={false} alignItems="center">
			<DevStage></DevStage>
		</Container>
	</>;
}