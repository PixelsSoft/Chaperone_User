import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  COLORS,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from "../../constants/theme";
import CustomHeader from "../../components/CustomHeader";
import CircularImage from "../../components/CircularImage";
import Row from "../../components/Row";
import Icon, { IconType } from "../../components/Icons";
import MyTouchableOpacity from "../../components/MyTouchableOpacity";
import CustomButton from "../../components/CustomButton";
import DatePicker from "react-native-date-picker";
import moment from "moment";

export default function Booking(props) {
  const { navigation } = props;
  const [date, setDate] = useState(new Date());
  const [time, settime] = useState(new Date());

  const [selectedDate, setselectedDate] = useState();
  const [selectedTime, setselectedTime] = useState();
  const [selected, setSelected] = useState(false);
  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={"Schedule Time"} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.twenty,
          marginTop: SIZES.twenty,
        }}
      >
        <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Row style={{ alignItems: "center" }}>
            <CircularImage image={IMAGES.User} />
            <Text
              style={{
                marginHorizontal: SIZES.ten,
                fontWeight: "600",
                color: COLORS.black,
              }}
            >
              David John
            </Text>
          </Row>
          <MyTouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.VendorProfile);
            }}
          >
            <Text style={{ fontWeight: "600", color: COLORS.primary }}>
              View Profile
            </Text>
          </MyTouchableOpacity>
        </Row>
        <Text
          style={[
            FONTS.mediumFont12,
            { color: COLORS.brownGray, marginVertical: SIZES.ten },
          ]}
        >
          Car Mechanic
        </Text>
        <Row style={{ alignItems: "center" }}>
          <Icon
            name={"shield"}
            type={IconType.Entypo}
            size={SIZES.twenty}
            color={COLORS.trueGreen}
          />
          <Text
            style={[
              FONTS.mediumFont10,
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
              marginVertical: SIZES.ten,
              marginRight: SIZES.ten,
            },
          ]}
        >
          Car Mechanic ,NY {"(2Km)"}
        </Text>
        <Text style={[FONTS.mediumFont12, { color: COLORS.primary }]}>
          1.6 ratings
        </Text>
        <Text
          style={[
            FONTS.boldFont18,
            { color: COLORS.black, marginVertical: SIZES.twentyFive },
          ]}
        >
          Service Time
        </Text>
        <Text style={[FONTS.boldFont18, { color: COLORS.primary }]}>
          IMMIDIATE SERVICE
        </Text>
        <Text
          style={[
            FONTS.mediumFont14,
            { color: COLORS.brownGray, marginVertical: SIZES.five },
          ]}
        >
          Get a service ina a minute
        </Text>

        <Row
          style={{
            marginTop: SIZES.twenty,
            borderColor: COLORS.primary,
            borderWidth: 2,
            padding: SIZES.fifteen,
            borderRadius: SIZES.twenty,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={[
                ,
                {
                  color: COLORS.black,
                  fontSize: SIZES.twenty - 1,
                  fontWeight: "500",
                },
              ]}
            >
              Schedule Service
            </Text>
            <Text
              style={[
                FONTS.mediumFont12,
                { color: COLORS.brownGray, marginVertical: SIZES.five },
              ]}
            >
              Schedule your service in 15 minutes
            </Text>
          </View>
          <MyTouchableOpacity
            onPress={() => {
              if (selected) {
                setSelected(false);
              } else {
                setSelected(true);
              }
            }}
          >
            <Icon
              name="check"
              type={IconType.AntDesign}
              style={{
                borderWidth: 1,
                borderRadius: SIZES.ten,
                fontSize: SIZES.twenty,
                padding: SIZES.five,
                color: selected ? COLORS.white : COLORS.black,
                backgroundColor: selected ? COLORS.primary : COLORS.white,
                borderColor: selected ? COLORS.white : COLORS.black,
              }}
            />
          </MyTouchableOpacity>
        </Row>
        <View style={{ marginVertical: SIZES.twenty }}>
          <DatePicker
            fadeToColor="none"
            androidVariant="iosClone" // "iosClone" & "nativeAndroid"
            date={date}
            onDateChange={(text) => {
              setDate(text);

              setselectedDate(moment(text).format("YYYY-MM-DD"));
            }}
            mode="datetime"
            locale="en"
            textColor={COLORS.black}
            style={styles.datepicker}
            minimumDate={new Date()}
          />
        </View>
        <Text
          style={[
            FONTS.mediumFont12,
            {
              color: COLORS.brownGray,
              marginVertical: SIZES.ten,
              textAlign: "center",
            },
          ]}
        >
          Service provider may arrive between 8:00 to 9:00 PM
        </Text>
        <CustomButton
          onPress={() => {
            navigation.navigate(SCREENS.BookingConfirm);
          }}
          title={"Next"}
          btnStyle={{ marginVertical: SIZES.twentyFive }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  datepicker: {
    backgroundColor: COLORS.white,
    height: Platform.OS === "android" ? height * 0.15 : height * 0.18,
    width: width - SIZES.twenty * SIZES.five,
    marginVertical: SIZES.five,
  },
});
