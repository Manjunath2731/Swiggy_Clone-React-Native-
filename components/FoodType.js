import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const FoodType = () => {
  const Types = [
    {
      id: "0",
      image:
        "https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=740&t=st=1672762570~exp=1672763170~hmac=97c3eb471630a99ce56b384c4ce5fbf754c04e86983283fcf7d835c495806099",
      name: "Biryani",
    },
    {
      id: "1",
      image:
        "https://img.freepik.com/free-photo/indian-sweet-food-gulab-jamun-served-round-ceramic-bowl_466689-71859.jpg?w=740&t=st=1672762936~exp=1672763536~hmac=63d80e71c8eaee49df926972e9dd87778dc7ee2618c3b01707a159482bc6a5c9",
      name: "Desert",
    },
    {
      id: "2",
      image:
        "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?w=740&t=st=1672762983~exp=1672763583~hmac=25e566965f4d79514dbf57ae570fb95730f8332246c871daae102efac85dee5b",
      name: "Burger",
    },
    {
      id: "3",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-vegetable-salad-sliced-food-with-fresh-ingredients-dark-background-salad-meal-snack-lunch-food-color_140725-96830.jpg?w=740&t=st=1672763030~exp=1672763630~hmac=3a99495c345f439d5a8059a08fa135fef5e0b982b481d136f1d60b0f6de044e7",
      name: "Salad",
    },
    {
      id: "4",
      image:
        "https://img.freepik.com/premium-photo/idli-sambar-vada-coconut-chutney-south-indian-breakfast_57665-7256.jpg?w=740",
      name: "Idli",
    },
  ];
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Types.map((item, index) => (
          <View
            style={{
              marginTop: 20,
              margin: 10,
              borderRadius: 30,
            }}
            key={index}
          >
            <View
              style={{
                shadowColor: "black",
                shadowOpacity: 0.26,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 10,
                elevation: 3,
                backgroundColor: "white",
              }}
            ></View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <Text style={{ marginTop: 5, textAlign: "center" }}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodType;

const styles = StyleSheet.create({});
