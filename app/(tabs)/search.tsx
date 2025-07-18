import { Box } from '@/components/ui/box';
import { SearchIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';




const Trending = [
  {
  id:1,
  title:"Movies"
},
{
  id:2,
  title:"Shows"
},
{
  id:3,
  title:"Action"
},
{
  id:4,
  title:"Comedy"
}
]


const search = () => {
  return (
    <View className='flex-1 bg-background-dark'>
   <ScrollView
   className="flex-1 px-5"
   showsVerticalScrollIndicator={false}
   contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
   >
     <Input className="mt-10"
        size="md"
        variant="rounded"
        >
        <InputSlot className="pl-3">
        <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search for movie" className="text-white"/>
        </Input>

{/* 
        <Select className="mt-2">
        <SelectTrigger>
          <SelectInput placeholder="Select option" className="flex-1" />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Red" value="red" />
            <SelectItem label="Blue" value="blue" />
            <SelectItem label="Black" value="black" />
            <SelectItem label="Pink" value="pink" isDisabled={true} />
            <SelectItem label="Green" value="green" />
          </SelectContent>
        </SelectPortal>
      </Select> */}

    <>
    <FlatList
  data={Trending}
  horizontal={true}
  renderItem={({item})=><Box className='mt-3'>
    <Text className='mx-2'>{item.title}</Text>
  </Box>}
  keyExtractor={(item)=>item.id.toString()}
  />
</>
   </ScrollView>
    </View>
  )
}



export default search   