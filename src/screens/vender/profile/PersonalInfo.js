import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS, FONTS, height, SIZES, STYLES } from "../../../constants/theme";
import Row from "../../../components/Row";
import Icon, { IconType } from "../../../components/Icons";

export default function PersonalInfo() {
  const renderServices = () => {
    return (
      <View
        style={{
          margin: SIZES.fifteen,
          padding: SIZES.twenty,
          borderRadius: SIZES.fifteen,
          backgroundColor: "#fff",
          borderRadius: SIZES.fifteen,
          shadowColor: COLORS.blackWithopacity,
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
        }}
      >
        <Row>
          <View
            style={{
              height: SIZES.fifty * 1.95,
              width: SIZES.fifty * 1.75,
              borderColor: "#efefef65",
              borderRadius: SIZES.fifteen,
              borderWidth: 0.3,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Image
              source={{
                uri:
                  "https://image.shutterstock.com/image-vector/vector-logo-badge-design-template-260nw-1198808164.jpg",
              }}
              style={{
                height: "100%",
                width: "100%",
                overflow: "hidden",
                borderRadius: SIZES.fifteen,
              }}
              resizeMode={"cover"}
            />
          </View>
          <View
            style={{
              marginStart: SIZES.ten,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.black,
                  marginTop: 10,
                  fontSize: 14,
                },
              ]}
            >
              Car Mechanic
            </Text>
            <Row style={{ alignItems: "center", marginVertical: SIZES.five }}>
              <Icon
                name={"shield"}
                type={IconType.Entypo}
                size={SIZES.fifteen}
                color={COLORS.trueGreen}
              />
              <Text
                style={[
                  FONTS.mediumFont12,
                  { color: COLORS.trueGreen, marginHorizontal: SIZES.ten },
                ]}
              >
                Verified
              </Text>
            </Row>

            <Text
              style={[
                FONTS.boldFont16,
                {
                  color: COLORS.gray,
                  marginVertical: SIZES.five,
                  marginRight: SIZES.ten,
                },
              ]}
            >
              Car Mechanic, NY (2km)
            </Text>
            <Text style={[FONTS.mediumFont14, { color: COLORS.primary }]}>
              1.6 ratings
            </Text>
          </View>
        </Row>
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: height * 0.018 }}
    >
      <View>
        <View
          style={{
            margin: SIZES.fifteen,
            padding: SIZES.twenty,
            borderRadius: SIZES.fifteen,
            backgroundColor: "#fff",
            borderRadius: SIZES.fifteen,
            shadowColor: COLORS.blackWithopacity,
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 10,
          }}
        >
          <Row style={{ justifyContent: "space-between" }}>
            <View style={{ marginVertical: SIZES.ten, width: "50%" }}>
              <Text
                style={[
                  FONTS.boldFont16,
                  { color: COLORS.gray + 85, marginVertical: SIZES.ten },
                ]}
              >
                Name
              </Text>
              <Text tyle={[FONTS.boldFont16, { color: COLORS.black }]}>
                Alexa John
              </Text>
            </View>
            <View style={{ marginVertical: SIZES.ten, width: "50%" }}>
              <Text
                style={[
                  FONTS.boldFont16,
                  { color: COLORS.gray + 85, marginVertical: SIZES.ten },
                ]}
              >
                Email
              </Text>
              <Text tyle={[FONTS.boldFont16, { color: COLORS.black }]}>
                AlexaJohn@gmail.com
              </Text>
            </View>
          </Row>
          <Row style={{ justifyContent: "space-between" }}>
            <View style={{ marginVertical: SIZES.ten, width: "50%" }}>
              <Text
                style={[
                  FONTS.boldFont16,
                  { color: COLORS.gray + 85, marginVertical: SIZES.ten },
                ]}
              >
                Phone no
              </Text>
              <Text tyle={[FONTS.boldFont16, { color: COLORS.black }]}>
                +11 223456982
              </Text>
            </View>
            <View style={{ marginVertical: SIZES.ten, width: "50%" }}>
              <Text
                style={[
                  FONTS.boldFont16,
                  { color: COLORS.gray + 85, marginVertical: SIZES.ten },
                ]}
              >
                Address
              </Text>
              <Text tyle={[FONTS.boldFont18, { color: COLORS.black }]}>
                New York, USA
              </Text>
            </View>
          </Row>
        </View>
        <Text
          style={[
            FONTS.boldFont18,
            { color: COLORS.black, margin: SIZES.fifteen },
          ]}
        >
          Serivces we offer
        </Text>

        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={renderServices}
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsVerticalScrollIndicator={false}
        />

        <Text
          style={[
            FONTS.boldFont18,
            { color: COLORS.black, margin: SIZES.fifteen },
          ]}
        >
          Our Certifications
        </Text>

        <View
          style={{
            backgroundColor: COLORS.veryLightPink,
            margin: SIZES.fifteen,
            paddingHorizontal: SIZES.fifteen,
            borderRadius: SIZES.fifteen,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-achievement-design-template-58b46df635d246b8041a406332c7dcf2_screen.jpg?ts=1613737021",
            }}
            // source={IMAGES.Certificate}
            style={{
              height: height * 0.24,
              width: height * 0.35,
            }}
            resizeMode={"contain"}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
