import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          style={{ height: 100, width: 100, backgroundColor: 'gray', borderRadius: 50 }}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
