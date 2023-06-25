import { pushToExternalLink } from "@/hooks/link";
import { Button, Card, Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";

export default function DevStage() {
	const router = useRouter();

	return <Card>
		<Card.Header >
			<Text b color="$warning">Dev Stage</Text>
		</Card.Header>
		<Card.Divider />
		<Card.Body>
			<Text>Сайт на етапі розробки! Якщо ви помітили баг, повідомте про це в:</Text>
			<Spacer y={0.7}></Spacer>
			<Grid.Container xs direction="row" gap={1}>
				<Grid>
					<Button
						auto
						flat
						icon={<FaTelegramPlane size={24} />}
						onPress={()=>{
							pushToExternalLink(router, "https://t.me/+qNxxGAafHVo0NWNi");
						}}
					>Телеграм група</Button>
				</Grid>
				<Grid>
					<Button
						auto
						flat
						icon={<FaGithub size={24} />}
						onPress={()=>{
							pushToExternalLink(router, "https://github.com/nitkanikita21/Ib2Marketplace");
						}}
					>Github проекту</Button>
				</Grid>
			</Grid.Container>
		</Card.Body>
	</Card>;
}