import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import CustomHeader from "../../components/CustomHeader";
import CommonButton from "../../components/CustomButton";
import {
  COLORS,
  CONSTANTS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  height,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from "../../constants";

export default function Verification(props) {
  const { navigation } = props;
  const [code, setcode] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focusField(0);
    }, 500);
  }, []);

  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <CustomHeader hasBackArrow />
        <Image
          source={IMAGES.Logo}
          resizeMode="contain"
          style={{
            alignSelf: "center",
            height: SIZES.twenty * 5,

            width: SIZES.twenty * 11,
          }}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.twenty,
          }}
        >
          <Text
            style={[
              {
                fontFamily: FONTFAMILY.Bold,
                fontSize: SIZES.twentyFive * 1.1,
                color: COLORS.black,
                textAlign: "center",
                marginTop: SIZES.twentyFive * 1.3,
              },
            ]}
          >
            Verification
          </Text>

          <Text
            style={[
              FONTS.mediumFont14,
              {
                alignSelf: "center",
                textAlign: "center",
                paddingHorizontal: SIZES.twenty,
                marginVertical: SIZES.fifteen,
                color: COLORS.brownGray,
              },
            ]}
          >
            Enter verification code
          </Text>

          <View style={{ paddingTop: SIZES.twentyFive * 1.45, flex: 1 }}>
            <OTPInputView
              code={code}
              pinCount={4}
              ref={inputRef}
              onCodeChanged={setcode}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.otp}
              codeInputHighlightStyle={styles.otpSelected}
              style={styles.container}
            />
          </View>
          <CommonButton
            btnStyle={{
              marginTop: SIZES.fifty * 2,
              bottom: height * 0.035,
              width: width * 0.9,
              alignSelf: "center",
            }}
            title="Verify"
            onPress={() => {
              navigation.navigate(SCREENS.Login);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  otp: {
    borderRadius: SIZES.fifteen,
    height: SIZES.twenty * 3,
    width: SIZES.twenty * 3,
    fontSize: SIZES.twenty,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.blackWithopacity,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.blackWithopacity,
    borderRadius: SIZES.ten,
    shadowColor: "#00000035",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 8.3,
    elevation: 13,
  },
  otpSelected: {
    borderRadius: SIZES.fifteen,
    height: SIZES.twenty * 3,
    width: SIZES.twenty * 3,
    fontSize: SIZES.twenty,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.blackWithopacity,
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: SIZES.ten,
    shadowColor: "#00000035",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 8.3,

    elevation: 13,
  },
  container: {
    width: "95%",
    height: SIZES.twentyFive * 6,
    marginBottom: SIZES.fifty,
    alignSelf: "center",
  },
});
