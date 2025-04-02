import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            padding: 6,
            paddingLeft: 15,
            paddingBottom: 17,
            paddingTop: 12,
            backgroundColor: "#e8e9eb",
            width: 140,
            margin: 8,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={!origin && { opacity: 0.2 }}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Ionicons
              style={{
                width: 32,
                padding: 4,
                borderRadius: 16,
                backgroundColor: "black",
                marginTop: 10,
              }}
              name="arrow-forward-outline"
              size={25}
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
