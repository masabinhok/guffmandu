import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => (
  <View className='flex-1 flex items-center flex-col  mt-3'>
    <Image source={icon} tintColor={focused ? "#ff66c4" : "#666876"} resizeMode='contain' className='size-6' />
    <Text className={`${focused ? "text-primary-300 font-rubik-medium" : "text-primary-200 font-rubik"} text-xs w-full text-center mt-1 `}>
      {title}
    </Text>
  </View>
)

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        }
      }}
    >
      <Tabs.Screen name='index' options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.home} title='Home' />
        )
      }} />

      <Tabs.Screen name='chat' options={{
        title: "Chat",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.chat} title='Chat' />
        )
      }} />

      <Tabs.Screen name='profile' options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.person} title='Profile' />
        )
      }} />

    </Tabs>
  )
}

export default TabsLayout