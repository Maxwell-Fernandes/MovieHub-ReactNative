import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import React from 'react';
import { AddIcon } from "./ui/icon";



const Herobanner = ({
    id,
    poster_path,
    title,
    vote_average,
    release_date,
  }: Movie) =>  {
    return (
        <Card className="p-3 rounded-2xl max-w-full m-3 bg-background-800 flex-1">
        <Image
          source={{
            uri: poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
  
          }}
          className="w-full h-[240px] rounded-md"
          alt="image"
          resizeMode="cover"
        />

        <Heading size="md" className="mb-4 mt-4 text-white" numberOfLines={1}>
          {title}
        </Heading>
  
      <Button variant="solid" action="primary" className="mb-2 rounded-2xl">
          <ButtonText>Add to Watchlist</ButtonText>
          <ButtonIcon as={AddIcon} />
      </Button>

      </Card>
    );
}



export default Herobanner;
