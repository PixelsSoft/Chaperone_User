import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Row from "../../../components/Row";
import CircularImage from "../../../components/CircularImage";
import { IMAGES } from "../../../constants";
import { COLORS, FONTS, SIZES } from "../../../constants/theme";
import Icon, { IconType } from "../../../components/Icons";
import moment from "moment";

export default function Reviews() {
  const ReviewCard = () => {
    return (
      <Row
        style={{
          borderBottomWidth: 1,
          borderColor: COLORS.gray,
          flex: 1,
          paddingBottom: SIZES.five,
          marginBottom: SIZES.fifteen,
          justifyContent: "space-between",
        }}
      >
        <CircularImage
          image={IMAGES.User}
          imageStyle={{
            width: SIZES.fifty,
            height: SIZES.fifty,
            borderColor: COLORS.primary,
          }}
        />
        <View style={{ width: "70%", marginHorizontal: SIZES.ten }}>
          <Text style={[FONTS.boldFont18, { marginBottom: SIZES.ten }]}>
            John Deen
          </Text>
          <Text style={[FONTS.mediumFont12, { textAlign: "justify" }]}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deser unt mollit anim id est laborum.
          </Text>
          <Text
            style={[
              FONTS.boldFont16,
              { marginVertical: SIZES.ten, color: COLORS.gray },
            ]}
          >
            {moment(new Date()).format("MMMM DD YYYY")}
          </Text>
        </View>

        <Icon
          name={"dots-three-horizontal"}
          type={IconType.Entypo}
          color={COLORS.gray}
        />
      </Row>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        padding: SIZES.twenty,
      }}
    >
      {Review.map((item) => {
        return <ReviewCard />;
      })}
    </ScrollView>
  );
}
const Review = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
];

const styles = StyleSheet.create({});
