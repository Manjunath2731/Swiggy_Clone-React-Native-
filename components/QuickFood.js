import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import quickfood from "../data/quickfood";
import { MaterialIcons } from "@expo/vector-icons";

const QuickFood = () => {
  const data = quickfood;
  return (
    <View
      style={{
        margin: 10,
        borderRadius: 6,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 50,
        elevation: 6,
        backgroundColor: "#e5e5e5",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 8,color:"black" }}>
        Get it Quickly
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={{ margin: 10 }} key={index}>
            <View
              style={{
                shadowColor: "#000814",
                shadowOpacity: 0.26,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 50,
                elevation: 6,
                backgroundColor: "#fff0f3",
                borderRadius:15
              }}
            >
              <ImageBackground
                imageStyle={{ borderRadius: 6 }}
                style={{ aspectRatio: 5 / 6, height: 170 }}
                source={{ uri: item.image }}
              >
                <Text
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    fontSize: 25,
                    fontWeight: "600",
                    color: "#f5ebe0",
                  }}
                >
                  {item.offer} off
                </Text>
              </ImageBackground>
            </View>
            <Text style={{ marginTop: 10, fontSize: 12 }}>{item.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <MaterialIcons name="stars" size={20} color="green" />
              <Text style={{ marginLeft: 3 }}>{item.rating}</Text>
              <Text style={{ marginLeft: 3 }}>.</Text>
              <Text style={{ marginLeft: 3, fontSize: 12 }}>
                {item.time}mins
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({});
// style={{marginTop:10,fontSize:15,fontWeight:500}}
