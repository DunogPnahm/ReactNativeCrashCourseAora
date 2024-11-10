import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'

type emptyProps = {
    title?: string;
    subtitle?: string;
};

const EmptyState = ({ title, subtitle }: emptyProps) => {
  return (
    <View className='justify-center items-center px-4'>
        <Image 
            source={images.empty}
            resizeMode='contain'
            className='w-[270px] h-[215px]'    
        />
    </View>
  )
}

export default EmptyState