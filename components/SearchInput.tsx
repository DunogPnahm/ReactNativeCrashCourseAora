import { View, Text, TextInput, Pressable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

type customFormFieldProps = {
    value?: any;
    handleChangeText?: any;
    otherStyles?: string;
    keyboardType?: string;
};

const SearchInput = ({ value, handleChangeText, otherStyles, keyboardType }: customFormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const [viewFocus, setViewFocus] = useState(false)

    return (
        <View className={`w-full h-16 px-4 bg-black-100 border-2 rounded-2xl ${viewFocus? 'border-secondary' : 'border-black-200'} flex-row items-center space-x-4`}>
            <TextInput
                className='flex-1 text-white font-psemibold text-base'
                onFocus={() => setViewFocus(true)}
                onBlur={() => setViewFocus(false)}
                value={value}
                placeholder="Search for a video topic"
                placeholderTextColor="#7B7B8B"
                onChangeText={handleChangeText}
                selectionColor="#CDCDE0"
            />

            <TouchableOpacity>
                <Image 
                    source={icons.search}
                    className='w-5 h-5'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput