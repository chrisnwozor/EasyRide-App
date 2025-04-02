import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "1",
    title: "EasyRide X",
    multipler: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "2",
    title: "EasyRide XL",
    multipler: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "3",
    title: "EasyRide XXL",
    multipler: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flexGrow: 1 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 3,
            left: 5,
            padding: 6,
          }}
          onPress={() => navigation.goBack("NavigateCard")}
        >
          <Ionicons name="arrow-back-outline" color="black" size={30} />
        </TouchableOpacity>

        <Text
          style={{
            padding: 20,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Pick a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { image, title, id, multipler }, item }) => (
          <TouchableOpacity
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              },
              id === selected?.id && { backgroundColor: "#e8e9eb" },
            ]}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={{ marginLeft: 6 }}>
              <Text style={{ fontSize: 20, fontWeight: "semibold" }}>
                {title}
              </Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "CAD",
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multipler) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View
        style={{
          marginTop: "auto",
          borderTopWidth: 1,
          borderTopColor: "#e8e9eb",
        }}
      >
        <TouchableOpacity
          disabled={!selected}
          style={[
            { backgroundColor: "black", paddingVertical: 20, margin: 8 },
            !selected && { backgroundColor: "#e8e9eb" },
          ]}
          onPress={() => navigation.navigate("AprilFoolScreen")}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
