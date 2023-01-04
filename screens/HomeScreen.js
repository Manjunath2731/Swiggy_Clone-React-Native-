import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
  Appearance,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodType from "../components/FoodType";
import QuickFood from "../components/QuickFood";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import hotels from "../data/hotels";
import Menuitem from "../components/Menuitem";


const HomeScreen = () => {
  const[theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{

  })
  const data = hotels;
  return (
    //search bar
    <ScrollView style={{ marginTop: 40 }}>
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            margin: 10,
            padding: 10,
            borderColor: "#283618",
            borderRadius: 7,
          }}
        >
          <TextInput
            style={{ fontSize: 15.5 }}
            placeholder="Search for Restaurant item or more"
          />
          <AntDesign name="search1" size={24} color="#E52850" />
        </View>

        <Carousel />

        <FoodType />

        <QuickFood />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Pressable
            style={{
              marginHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#D0D0D0",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              width: 120,
            }}
          >
            <Text style={{ fontSize: 12, marginRight: 6 }}>Filter</Text>
            <MaterialCommunityIcons
              name="filter-variant"
              size={20}
              color="black"
            />
          </Pressable>
          <Pressable
            style={{
              marginHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#D0D0D0",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              width: 120,
            }}
          >
            <Text style={{ fontSize: 12 }}>Sort-Rating</Text>
          </Pressable>
          <Pressable
            style={{
              marginHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#D0D0D0",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              width: 120,
            }}
          >
            <Text style={{ fontSize: 12 }}>Sort-Price</Text>
          </Pressable>
        </View>
        {data.map((item, index) => (
          <Menuitem key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
