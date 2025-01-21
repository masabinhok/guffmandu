import images from "@/constants/images";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface heroFeaturesType {
  title: string,
  icon: any
}

const heroFeatures = [{
  title: 'Random Video Chat',
  icon: images.eighteen,
}, {
  title: 'Streamer Privileges',
  icon: images.eighteen,
}, {
  title: 'Real Gifts',
  icon: images.eighteen,
}, {
  title: 'Mini Games',
  icon: images.eighteen,
}]

const HeroFeatures = ({ title, icon }: heroFeaturesType) => {
  return (
    <View className="flex flex-col items-center justify-center w-[48%] p-5">
      <Image source={icon} className="size-24 rounded-full border-4 border-primary-300 " resizeMode="contain" />
      <Text className="text-primary-300 font-rubik-bold text-center mt-2">{title}</Text>
    </View>
  )
}

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="bg-white h-full">
        <View className="flex flex-col items-center justify-center p-10">
          <View className="bg-primary-100 rounded-lg p-5 mt-5 w-full ">
            <Text className="text-primary-300 text-2xl font-rubik-bold text-center">Who said Chatting had to be boring?</Text>
            <View className="w-full flex flex-row flex-wrap">
              {
                heroFeatures.map((feature, index) => (
                  <HeroFeatures key={index} title={feature.title} icon={feature.icon} />
                ))
              }
            </View>
          </View>
        </View>
        <View className="flex flex-col items-center justify-center">
          <Image source={images.logo} resizeMode="contain" />
          <Text className="text-primary-300 font-rubik text-sm -mt-5 z-10">Transforming ordinary chats into extraordinary moments.</Text>
          <TouchableOpacity onPress={() => router.push('/chat')} className="bg-primary-300 rounded-lg p-3 mt-5 ">
            <Text className="text-white font-rubik-extrabold text-xl">
              Join The Guff Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
