import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'

const Home = () => {
  return (
    <SafeAreaView className='bg-primary'>
      <FlatList className='pb-6'
       data= {[{ id: "1" }, { id: "2" }, { id: "3" },]}
       keyExtractor={(item) => item.id}
       renderItem={({ item }) => {
        return <Text className='text-3xl text-white'>{item.id}</Text>
       }}
       ListHeaderComponent={() => {
        return <View className='my-6 px-4 space-y-6'>
          <View className='justify-between items-start flex-row mb-6'>
            <View>
              <Text className='font-pmedium text-sm text-gray-100'>Welcome back,</Text>
              <Text className='text-2xl font-psemibold text-white'>DunogPnahm!</Text>
            </View>
            <View className='mt-1.5'>
              <Image 
                source={images.logoSmall} 
                resizeMode='contain'
                className='w-9 h-10'
              />
            </View>
          </View>
          
          <SearchInput />

          <View className='w-full flex-1 pt-5 pb-8'>
            <Text className='text-gray-100 text-lg font-pregular mb-3'>
              Latest Videos
            </Text>

            <Trending 
              posts={[{id: 1}, {id: 2}, {id: 3}]}
            />
          </View>
        </View>
       }}
       ListEmptyComponent={() => {
          return (
            <EmptyState 
              title='No Videos Found'
              subtitle='Be the first one to upload a video'
            />
          ) 
       }}
      />
    </SafeAreaView>
  )
}

export default Home