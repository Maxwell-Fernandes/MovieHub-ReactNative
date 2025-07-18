
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { HStack } from "@/components/ui/hstack"
import { Image } from "@/components/ui/image"
import { Text } from "@/components/ui/text"
import { icons } from "@/constants/icons"
import React from 'react'
import { AddIcon } from "./ui/icon"

const MovieList = ({
    id,
    poster_path,
    title,
    vote_average,
    release_date,
  }: Movie) => {

  return (
    <Card className="p-3 rounded-2xl max-w-full m-2 bg-background-800 flex-1">
      <Image
        source={{
          uri: poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",

        }}
        className="h-[240px] w-full rounded-md aspect-[263/240]"
        alt="image"
        resizeMode="contain"
      />
      <HStack space="sm">
        <Image
        source={icons.star}
        size="2xs"
        alt="rating"
        />
        <Text className="text-white">{vote_average.toFixed(1)}</Text>
      <Text className="font-bold text-white" bold>
        {release_date.split("-")[0]}
      </Text>
      
      </HStack>
      
      <Heading size="md" className="mb-4 mt-3 text-white" numberOfLines={1}>
        {title}
      </Heading>

    <Button variant="solid" action="primary" className="mb-2 rounded-2xl">
        <ButtonText>Add to Watchlist</ButtonText>
        <ButtonIcon as={AddIcon} />
    </Button>

    <Button className="rounded-2xl" size="sm">
        <ButtonText>
        Watch Trailer
        </ButtonText>
    </Button>

    </Card>
  )
}

export default MovieList

