import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/imageUrl"

interface GameProps {
    game: Game
}

const GameCard = ({game}:GameProps) => {


  return (
    <>
    <Card height={'100%'}>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <HStack justifyContent={'space-between'}>
              <PlatformIconsList platforms={game.parent_platforms.map(platform => platform.platform)}/>
              <CriticScore score={game.metacritic}/>

            </HStack>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard