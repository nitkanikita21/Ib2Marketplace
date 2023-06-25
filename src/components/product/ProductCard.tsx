import { Badge, Button, Card, Col, Container, Grid, Image, Row, Spacer, Text } from "@nextui-org/react";

export default function ProductCard({
	title, urlImage, price, isNew = false
}: {
	title: string,
	urlImage: string,
	price: number,
	isNew?: boolean | null,
}) {
	return <Card isHoverable isPressable css={{ "h": "auto", "w": "300px" }} variant="bordered">
		<Card.Divider />

		<Card.Image
			src={urlImage}
			objectFit="cover"
			css={{ "pt": 0, "h": "100%" }}
			height={250}
		/>
		<Card.Divider />
		<Card.Body>
			<Col>
				<Text h3>{title}</Text>
				<Row gap={0} justify="space-between">
					<Col span={6}> <Text color="gray">Торонто</Text> </Col>
					<Col span={6} >
						<Text color="primary" css={{ "ta": "right" }}>64 алмази</Text>
					</Col>
				</Row>
			</Col>
			<Spacer></Spacer>
			<Row gap={0} justify="center" fluid>
				<Button >Придбати</Button>
			</Row>
		</Card.Body>
	</Card>;
}