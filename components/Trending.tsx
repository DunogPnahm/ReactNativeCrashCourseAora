import { View, Text, FlatList } from 'react-native'
import React from 'react'

type trendingProps = {
    posts?: any;
};

const Trending = ({ posts}: trendingProps) => {
  return (
    <FlatList 
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => {
            return <Text className='text-3xl text-white'>{item.id}</Text>
        }}
        horizontal
    />
  )
}

export default Trending