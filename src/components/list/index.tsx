import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native'
import { RestaurantsListItem } from './vertical';

export interface RestaurantsListProps {
    id: number,
    name: string,
    image: string,
    rating: number,
}
export default function RestaurantsList() {

    const [restaurantslist, setRestaurantsList] = useState<RestaurantsListProps[]>([])

    useEffect(() => {
        async function getFoods(){
            const response = await fetch("http://192.168.100.47:3000/restaurants")
            const data = await response.json()
            setRestaurantsList(data);
        }

        getFoods();
    }, []);

  return (
    <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
        {restaurantslist.map( item => (
            <RestaurantsListItem item={ item } key={item.id}/>
        )) }
    </View>
  )
}