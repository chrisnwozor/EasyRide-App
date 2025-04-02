import { Text, TouchableOpacity, FlatList, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "346 Fleming Dr, Canada, ON",
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "1455 oxford, Canada, ON",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={{ height: 0.5, backgroundColor: "grey" }} />
      )}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Ionicons
            style={{
              padding: 15,
              backgroundColor: "#e8e9eb",
              marginRight: 8,
              borderRadius: "100%",
            }}
            name={icon}
            color="white"
            size={25}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{location}</Text>
            <Text style={{ color: "grey" }}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
