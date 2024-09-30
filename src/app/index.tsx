import { Text, View, ScrollView} from "react-native";
import Constants from "expo-constants"
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFood } from "../components/trending";
import Restaurants from "../components/restaurants";
import RestaurantsList from "../components/list";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
      <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
        <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8}}>
          <Header/>
          <Banner/>
          <Search/>
        </View>
        <Section
          name="Comidas em alta"
          label="Veja mais"
          action={() => alert("Clicou em veja  mais!")}
          size="text-2xl"
        />
        <TrendingFood/>

        <Section
          name="Famosos no Food"
          label="Veja todos"
          action={() => alert("Clicou no Famosos no Food")}
          size="text-xl"
        />
        <Restaurants/>

        <Section
          name="Restaurantes"
          label="Veja todos"
          action={() => alert("Clicou no restaurantes")}
          size="text-xl"
        />
        <RestaurantsList />
        
      </ScrollView>
  );
}
