import { Text, View, ScrollView, Image } from "react-native";
import { Link, useNavigation, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants'
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";
import 'react-native-url-polyfill/auto'
import { useGlobalContext } from "@/context/GlobalProvider";

export default function Index() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  // if(!isLoading && isLoggedIn) return <Redirect href='./home' />
  return <Redirect href='./home' />

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full items-center justify-center min-h-[85vh] px-4 mt-10">
          <Image 
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image 
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative mt-5 px-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discorver Endless Posibilities with{' '}
            <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-2"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
          <CustomButton 
            title="Continue With Email"
            handlePress={() => {
              router.push('./sign-in')
            }}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
