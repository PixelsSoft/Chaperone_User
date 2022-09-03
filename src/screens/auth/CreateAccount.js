import React, { useState } from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUserType } from "../../redux/Slices/UserType";
import {
  COLORS,
  CONSTANTS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from "../../constants";
import MyTouchableOpacity from "../../components/MyTouchableOpacity";
import Row from "../../components/Row";
import CustomHeader from "../../components/CustomHeader";
import CustomButton from "../../components/CustomButton";
// import {
//   Row,
//   CustomHeader,
//   CustomButton,
//   MyTouchableOpacity,
// } from "../../components";

export default function CreateAccount({ navigation }) {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.UserType.value);
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onPressContinue = () => {
    if (!isTypeSelected) {
      setErrorText("Please select an account type to continue");
      return;
    }

    navigation.navigate(
      userType === CONSTANTS.USER ? SCREENS.SignUpUser : SCREENS.SignUpVendor
    );
    setErrorText("");
  };

  const SelectorButton = ({ title, description, image, selected, type }) => (
    <MyTouchableOpacity
      style={{
        backgroundColor: `${COLORS.lightPurple}10`,
        // paddingHorizontal:
        //   Platform.OS === "ios" ? SIZES.twenty : SIZES.twentyFive,
        // paddingVertical: Platform.OS === "ios" ? SIZES.ten : SIZES.fifteen,
        borderColor: `${COLORS.brownGray}10`,
        borderWidth: selected ? 2 : 0,
        borderColor: selected ? COLORS.primary : COLORS.transparent,
        borderRadius: SIZES.ten,
        marginTop: SIZES.twentyFive,
        width: SIZES.twentyFive * 6.5,
        height: SIZES.twentyFive * 7.5,
      }}
      onPress={() => {
        dispatch(setUserType(type));
        setIsTypeSelected(true);
        setErrorText("");
      }}
    >
      <Image
        source={image}
        resizeMode={"contain"}
        style={{ height: "100%", width: "100%" }}
      />
    </MyTouchableOpacity>
  );

  return (
    <View style={[STYLES.container]}>
      <CustomHeader hasBackArrow />

      <View style={{ padding: SIZES.twenty }}>
        <Text
          style={[
            FONTS.boldFont22,
            {
              textAlign: "center",
              color: COLORS.black,
              textTransform: "capitalize",
              marginTop: SIZES.twentyFive * 1.3,
            },
          ]}
        >
          Create Account
        </Text>
        <Text
          style={[
            FONTS.mediumFont12,
            {
              textAlign: "center",
              color: COLORS.textGrey,
              textTransform: "capitalize",
              marginTop: SIZES.ten,
            },
          ]}
        >
          Which type of account would you like?
        </Text>

        <Row
          style={{
            marginTop: SIZES.fifteen,
            marginBottom: SIZES.fifty,
            justifyContent: "space-between",
            paddingHorizontal: SIZES.twenty,
          }}
        >
          <View>
            <SelectorButton
              image={IMAGES.Vendor}
              selected={userType === CONSTANTS.VENDOR && isTypeSelected}
              type={CONSTANTS.VENDOR}
            />
            <Text
              style={[
                FONTS.boldFont20,
                {
                  textAlign: "center",
                  marginVertical: SIZES.twenty,
                  color: COLORS.black,
                  fontWeight: "bold",
                },
              ]}
            >
              Vendor
            </Text>
          </View>
          <View>
            <SelectorButton
              image={IMAGES.User}
              selected={userType === CONSTANTS.USER && isTypeSelected}
              type={CONSTANTS.USER}
            />
            <Text
              style={[
                FONTS.boldFont20,
                {
                  textAlign: "center",
                  marginVertical: SIZES.twenty,
                  color: COLORS.black,
                  fontWeight: "bold",
                },
              ]}
            >
              User
            </Text>
          </View>
        </Row>

        {errorText !== "" && (
          <Text
            style={[
              FONTS.mediumFont12,
              {
                textAlign: "center",
                color: COLORS.textColor,
                margintop: SIZES.fifteen,
                marginBottom: SIZES.twentyFive,
              },
            ]}
          >
            {errorText}
          </Text>
        )}

        <CustomButton
          title={"Continue"}
          style={{
            marginVertical:
              Platform.OS === "android" ? SIZES.twentyFive * 1.2 : SIZES.twenty,
          }}
          onPress={() => onPressContinue()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
