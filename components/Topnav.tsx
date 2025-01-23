import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
import { router } from 'expo-router'

const Topnav = ({ title }: { title: string }) => {
  return (
    <View className='flex flex-row items-center px-5 py-5'>
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={icons.backArrow} className='size-7' />
      </TouchableOpacity>
      <Text className='font-rubik-medium text-lg text-black-300 ml-5'>{title}</Text>
    </View >
  )
}

export default Topnav