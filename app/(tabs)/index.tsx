import { FlatList, ScrollView, View } from "react-native";


import Herobanner from "@/components/herobanner";
import MovieList from "@/components/movielist";

import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/usefetch";


export default function Index() {

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));
  
  return (
    <View className="flex-1 bg-background-dark">
      <Image 
      source={images.bg}
      alt="background image"
      size="none"
      className="absolute w-full z-0"
      resizeMode="cover"
      />
      
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        >
          <Image
          source={icons.logo}
          size="xs"
          className="mx-auto mt-10"
          alt="logo"
          />


        <>
        <Text size="2xl" bold className="mt-5 text-secondary-950">
          Trending
        </Text>
        <FlatList
        data={movies?.slice(0,5)}
        horizontal={true}
        contentContainerStyle={{
          gap: 26,
        }}
        renderItem={({item})=><Herobanner{...item}/>}
        keyExtractor={(item)=>item.id.toString()}
        snapToAlignment="center"
        />
        </>

        
        <>

        <Text bold className="mt-4 text-secondary-950" size="2xl" >
          All Movies
        </Text>

        <FlatList
        data={movies}
        renderItem={({item}) => <MovieList{...item} />}
        keyExtractor={(item)=>item.id.toString()}
        numColumns={2}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 5,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-5 pb-32"
                scrollEnabled={false}
      />
      </>


      </ScrollView>

    </View>
  );
}
