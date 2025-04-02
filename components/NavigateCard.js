import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text
        style={{
          textAlign: "center",
          paddingVertical: 5,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        WELCOME, ANAMBRA FUNDS
      </Text>
      <View
        style={{
          borderColor: "#e8e9eb",
          flexShrink: 1,
          borderTopWidth: 1,
        }}
      >
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            placeholder="Where to"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            minLength={2}
            returnKeyType={"search"}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "space-evenly",
          marginTop: "auto",
          paddingVertical: 25,
          borderTopWidth: 1,
          borderColor: "lightgrey",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "black",
            width: 84,
            alignItems: "center",
            borderRadius: 15,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Ionicons name="car" color="white" size={30} />
          <Text style={{ color: "white" }}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",

            width: 84,
            alignItems: "center",
            borderRadius: 15,
            justifyContent: "center",
          }}
        >
          <Ionicons name="fast-food-outline" color="black" size={30} />
          <Text style={{}}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 5,
    flex: 0,
    marginTop: 20,
  },
  textInput: {
    backgroundColor: "#DDDDDf",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NavigateCard;
