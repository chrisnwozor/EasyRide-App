import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginLeft: 7,
            marginBottom: 20,
          }}
        >
          EASY RIDE
        </Text>
        <GooglePlacesAutocomplete
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="Where From"
          debounce={400}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          minLength={2}
          fetchDetails={true}
          returnKeyType={"search"}
        />
        <NavOptions />
      </View>

      <NavFavourites />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
