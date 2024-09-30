import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { RestaurantsProps } from '..'

export function RestaurantsItem({ item }: {item: RestaurantsProps}) {
  return (
    <Pressable 
      onPress={ () => alert("CLICOU NO RESTAURANTE " + item.name) }
      className='flex flex-col items-center justify-center'>
      <Image 
        source={{ uri: item.image }}
        className='w-20 h-20 rounded-full'
      />
      <Text 
        className='text-xs mt-2 w-20 text-center leading-4 text-black font-semi-bold' 
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  )
}