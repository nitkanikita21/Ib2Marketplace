import { Button, Card, Spacer, Text } from "@nextui-org/react";

export default function DevStage() {
	return <Card variant="bordered">
		<Card.Header >
			<Text b color="$warning">Dev Stage</Text>
		</Card.Header>
		<Card.Divider />
		<Card.Body>
			<Text>Сайт на етапі розробки!</Text>
			<Spacer y={1}></Spacer>
			<Text>Всі баги повідомляти в особисті повідомлення розробнику в Discord Нитка#6240</Text>
		</Card.Body>
	</Card>;
}