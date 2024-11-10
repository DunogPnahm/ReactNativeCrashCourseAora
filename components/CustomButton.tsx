import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

type customButtonProps = {
    title: string;
    handlePress: any;
    containerStyles: string;
    textStyle?: string;
    isLoading?: boolean;
};

const CustomButton = ({ title, handlePress, containerStyles, textStyle, isLoading}: customButtonProps) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton