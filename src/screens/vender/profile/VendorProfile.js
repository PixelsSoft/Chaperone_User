import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { COLORS, FONTS, IMAGES, SIZES, STYLES } from "../../../constants/theme";
import CircularImage from "../../../components/CircularImage";
import Row from "../../../components/Row";
import CustomHeader from "../../../components/CustomHeader";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { ScrollTabBar } from "../../../components/ScrollTabBar";
import personal from "./PersonalInfo";
import Reviews from "./Reviews";

export default function VendorProfile() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Personal Info" },
    { key: "second", title: "Reviews" },
  ]);

  const renderScene = SceneMap({
    first: personal,
    second: Reviews,
  });

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={"Profile"} />
      <Row style={{ padding: SIZES.twenty }}>
        <CircularImage
          image={IMAGES.User}
          imageStyle={{
            height: SIZES.twenty * 4,
            width: SIZES.twenty * 4,
            borderColor: COLORS.primary,
            borderWidth: 1,
          }}
        />
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: SIZES.fifteen,
          }}
        >
          <Text style={[FONTS.mediumFont14, { color: COLORS.black }]}>
            David John
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.primary }]}>
            New York , USA
          </Text>
        </View>
      </Row>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={ScrollTabBar}
      />
    </View>
  );
}
