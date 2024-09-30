import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native'
import { RestaurantsItem } from './horizontal';

export interface RestaurantsProps {
    id: number,
    name: string,
    image: string,
}
export default function Restaurants() {

    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        async function getFoods(){
            const response = await fetch("http://192.168.100.47:3000/restaurants")
            const data = await response.json()
            setRestaurants(data);
        }

        getFoods();
    }, []);

  return (
    <FlatList
        data={restaurants}
        renderItem={ ({ item }) => <RestaurantsItem item={item}/> }
        horizontal={true}
        contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
        showsHorizontalScrollIndicator={false}
   />
  )
}