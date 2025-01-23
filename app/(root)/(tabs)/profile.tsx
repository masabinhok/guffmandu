import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { router } from 'expo-router'

interface SettingsTabType {
  icon: any,
  title: string,
  onPress?: () => void
}

const SettingsTab = ({ icon, title, onPress }: SettingsTabType) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-row justify-between items-center px-5 py-2 rounded-xl'>
      <View className='flex items-center flex-row gap-2 w-full'>
        <Image source={icon} className='size-5 ' tintColor="#ff66c4"  />
        <Text className='font-rubik-medium text-lg  text-black-200'>{title}</Text>
      </View>
      <Image source={icons.rightArrow} className='size-5' />
    </TouchableOpacity>
  )
}

const settingsTabItems = [
  {
    icons: icons.edit,
    title: 'Edit Profile',
    onPress: () => router.push('/edit-profile')
  }, {
    icons: icons.shield,
    title: 'Account and Security',
    onPress: () => router.push('/account-security')
  },
  {
    icons: icons.wallet,
    title: 'Balance',
    onPress: () => router.push('/balance')
  }, {
    icons: icons.gift,
    title: 'Gifts History',
    onPress: () => router.push('/gifts-history')
  },
  {
    icons: icons.withdraw,
    title: 'Withdraw Money',
    onPress: () => router.push('/withdraw-money')
  }, {
    icons: icons.topup,
    title: 'Topup GM coins',
    onPress: () => router.push('/topup')
  }
]

const ProfileScreen = () => {
  const handleLogout = () => { }
  return (
    <SafeAreaView>
      <ScrollView className='bg-white h-full'>
        <View className='flex flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={icons.backArrow} className='size-7' />
          </TouchableOpacity>
          <Text className='font-rubik-bold text-xl text-black-300'>Profile</Text>
          <TouchableOpacity onPress={() => router.push('/notifications')}>
            <Image source={icons.bell} className='size-7' />
          </TouchableOpacity>
        </View>
        <View className='flex flex-col px-5'>
          <View className='flex flex-col items-center placeholder:justify-center mt-10'>
            <Image source={images.avatar} className='rounded-full size-36' resizeMode='contain' />
            <Text className='text-xl font-rubik-bold text-black-300 mt-2 text-center'>Sabin Shrestha</Text>
            <Text className='text-xs font-rubik text-black-100 text-center '>sabin@gmail.com</Text>
          </View>
          <View className='flex flex-col mt-5 border-t border-primary-100 pt-5'>
            {settingsTabItems.slice(0, 2).map((item, index) => (
              <SettingsTab key={index} icon={item.icons} title={item.title} onPress={item.onPress} />
            ))}
          </View>
          <View className='flex flex-col mt-5 border-t border-primary-100 pt-5'>
            {settingsTabItems.slice(2).map((item, index) => (
              <SettingsTab key={index} icon={item.icons} title={item.title} onPress={item.onPress} />
            ))}
          </View>
          <View className='flex flex-col mt-5 border-t border-primary-100 pt-5'>
            <TouchableOpacity onPress={() => handleLogout()} className='flex px-5 py-2 rounded-xl'>
              <View className='flex flex-row items-center gap-2'>
                <Image source={icons.logout} className='size-5' />
                <Text className='font-rubik-medium text-lg  text-danger'>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen