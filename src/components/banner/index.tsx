import { useEffect, useRef, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
    const pagerRef = useRef<PagerView>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const banners = [
        { key: '1', source: require('../../../assets/banners/banner1.png'), alertMessage: 'CLICOU NO BANNER 1' },
        { key: '2', source: require('../../../assets/banners/banner2.png'), alertMessage: 'CLICOU NO BANNER 2' }
      ];

      useEffect(() => {
        const intervalId = setInterval(() => {
          const nextPage = (currentPage + 1) % banners.length;
          if (pagerRef.current) {
            pagerRef.current.setPage(nextPage);
          }
          setCurrentPage(nextPage);
        }, 3000);
    
        return () => clearInterval(intervalId);
      }, [currentPage, banners.length]);

  return (
    <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4">
        <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14} ref={pagerRef}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
             {banners.map((banner) => (
          <Pressable
            className="w-full h-36 rounded-2xl"
            key={banner.key}
            onPress={() => alert(banner.alertMessage)}
          >
            <Image
              source={banner.source}
              className="w-full h-36 rounded-2xl"
            />
          </Pressable>
        ))}
        </PagerView>
    </View>
  )
}
