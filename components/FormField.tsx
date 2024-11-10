import { View, Text, TextInput, Pressable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

type customFormFieldProps = {
    title: string;
    value: any;
    handleChangeText: any;
    otherStyles: string;
    keyboardType?: string;
    placeHolder?: string;
};

const FormField = ({ title, value, handleChangeText, otherStyles, keyboardType, placeHolder }: customFormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const [viewFocus, setViewFocus] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

            <View className={`w-full h-16 px-4 bg-black-100 border-2 rounded-2xl ${viewFocus? 'border-secondary' : 'border-black-200'} flex-row items-center`}>
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    onFocus={() => setViewFocus(true)}
                    onBlur={() => setViewFocus(false)}
                    value={value}
                    placeholder={placeHolder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    selectionColor="#CDCDE0"
                />
                {title === "Password" && (
                    <TouchableOpacity onPress={() => {setShowPassword(!showPassword)}}>
                        <Image 
                            source={!showPassword ? icons.eye : icons.eyeHide} 
                            className='w-6 h-6'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField