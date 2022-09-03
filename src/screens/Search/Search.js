import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, height, IMAGES, SIZES, STYLES } from "../../constants/theme";
import Row from "../../components/Row";
import Icon, { IconType } from "../../components/Icons";
import CustomHeader from "../../components/CustomHeader";
import SearchBar from "react-native-dynamic-search-bar";
import VendorCard from "../../components/VendorCard";

export default function Search() {
  const [filters, setFilter] = useState("");
  const [spinnerVisibility, setSpinnerVisibility] = useState(true);
  const [filterData, setFilterData] = useState(null);

  const result = vendors.filter((item) => {
    return item.title.includes(filters);
  });

  useEffect(() => {}, []);

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title="Search " />
      <SearchBar
        placeholder="Search here"
        onChangeText={(text) => setFilter(text)}
        onSearchPress={() => console.log("Search Icon is pressed")}
        onClearPress={() => setFilter("")}
        style={{ backgroundColor: COLORS.halfWhite }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: SIZES.ten,
          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        {filters === ""
          ? vendors.map((item) => {
              return <VendorCard item={item} style={{ width: "90%" }} />;
            })
          : result.map((item) => {
              return <VendorCard item={item} style={{ width: "90%" }} />;
            })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

const vendors = [
  {
    id: "1",
    image: IMAGES.User,
    title: "car Mechanic",
    type: "Car Mechanic, NY (2km)",
    ratings: "1.0 ratings",
  },
  {
    id: "2",
    image: IMAGES.User,
    title: "car Mechanic",
    type: "Car Wash, NY (1km)",
    ratings: "1.1 ratings",
  },
  {
    id: "3",
    image: IMAGES.User,
    title: "car Mechanic",
    type: "Puncture, NY (1.2km)",
    ratings: "1.2 ratings",
  },
  {
    id: "4",
    image: IMAGES.User,
    title: "car Mechanic",
    type: "Plumber, NY (0.2km)",
    ratings: "1.3 ratings",
  },
  {
    id: "5",
    image: IMAGES.User,
    title: "plumber",
    type: "Bike Electrician, NY (0.5km)",
    ratings: "1.4 ratings",
  },
  {
    id: "5",
    image: IMAGES.User,
    title: "Electric",
    type: "Bike Electrician, NY (0.5km)",
    ratings: "1.4 ratings",
  },
  {
    id: "5",
    image: IMAGES.User,
    title: "cleaner",
    type: "Bike Electrician, NY (0.5km)",
    ratings: "1.4 ratings",
  },
];
