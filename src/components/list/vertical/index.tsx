import { View, Text, Pressable, Image } from 'react-native'
import { RestaurantsListProps } from '..'
import { Ionicons } from '@expo/vector-icons'

export function RestaurantsListItem({ item }: { item: RestaurantsListProps }) {
  return (
    <Pressable 
      onPress={ () => alert("CLICOU NO RESTAURANTE " + item.name) }
      className='flex flex-row items-center justify-start gap-2'>
      <Image 
        source={{ uri: item.image }}
        className='w-20 h-20 rounded-full'
      />
      <View className='flex gap-2'>
        <Text>{item.name}</Text>
        <View className='flex-row items-center gap-1'>
            <Ionicons name='star' size={14} color="#ca8a04"/>
            <Text className='text-sm'>{item.rating}</Text>
        </View>
      </View>
    </Pressable>
  )
}