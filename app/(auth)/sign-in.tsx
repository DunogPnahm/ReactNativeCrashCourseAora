import { Text, View, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../../constants"
import React, { useState } from 'react'
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { signIn, account, getCurrentUser } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleLogin } = useGlobalContext();

  const { setUser, setIsLoggedIn } = useGlobalContext();

  const submit = async () => {
    if(!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
    }
    setIsSubmitting(true);

    try {
      await account.deleteSession('current');
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      handleLogin(result);
      Alert.alert("Successfully logged-in!")
      router.replace('/home');
    } catch (error) {
      console.error(error);
      Alert.alert('Something is wrong');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View
          className="w-full h-full justify-center px-4 my-6"
        >
          <Image 
            source={images.logo}
            resizeMode="contain"
            className={`w-[115px] h-[35px]`}
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">Log in to Aora</Text>
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
          />
          <CustomButton 
            title="Sign-in"
            handlePress={submit}
            containerStyles="mt-7"
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link 
              href="./sign-up"
              className="text-lg font-psemibold text-secondary"
            >Sign-up</Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  )
}

export default SignIn