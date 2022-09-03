import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { STYLES } from "../../constants";
import CustomHeader from "../../components/CustomHeader";
import CustomButton from "../../components/CustomButton";
import EditText from "../../components/EditText";
import Icon, { IconType } from "../../components/Icons";
import {
  COLORS,
  CONSTANTS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
} from "../../constants/theme";
import MyTouchableOpacity from "../../components/MyTouchableOpacity";
import Row from "../../components/Row";
import { useSelector } from "react-redux";

export default function Login(props) {
  const { route, navigation } = props;
  const passwordRef = React.createRef(null);
  const userType = useSelector((state) => state.UserType.value);

  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <CustomHeader hasBackArrow title="Log In" />
        <Image
          source={IMAGES.Logo}
          resizeMode="contain"
          style={{
            alignSelf: "center",
            height: SIZES.twenty * 5,

            width: SIZES.twenty * 11,
          }}
        />
        <View style={styles.inputfiled}>
          <EditText
            placeholder={"Email"}
            onSubmitEditing={() => {
              passwordRef.current.focus();
            }}
          />
          <EditText ref={passwordRef} placeholder={"Password"} password />
          <MyTouchableOpacity
            style={{ alignSelf: "flex-end", marginVertical: SIZES.twentyFive }}
            onPress={() => {
              navigation.navigate(SCREENS.ForgotPassword, {
                data: props.value,
              });
            }}
          >
            <Text
              style={[
                FONTS.mediumFont14,
                {
                  color: COLORS.primary,

                  alignSelf: "flex-end",
                },
              ]}
            >
              Forgot Password?
            </Text>
          </MyTouchableOpacity>
          <CustomButton
            onPress={() => {
              navigation.navigate(SCREENS.DrawerNavigator);
            }}
            title={"Log In"}
            btnStyle={{ marginVertical: SIZES.twentyFive }}
          />

          <View>
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.brownGray,
                  textAlign: "center",
                  marginTop: SIZES.twenty,
                },
              ]}
            >
              or Contiune with
            </Text>

            {/* ===========social button============ */}
            <Row
              style={{
                justifyContent: "space-evenly",
                marginVertical: SIZES.twentyFive * 1.5,
              }}
            >
              {Platform.OS === "ios" && (
                <MyTouchableOpacity style={[styles.AppleButton]}>
                  <Icon
                    name="apple1"
                    type={IconType.AntDesign}
                    size={SIZES.twentyFive}
                    color={COLORS.white}
                  />

                  <Text
                    style={[
                      FONTS.boldFont16,
                      { color: COLORS.white, marginStart: SIZES.five },
                    ]}
                  >
                    Contiune with
                  </Text>
                </MyTouchableOpacity>
              )}
              <MyTouchableOpacity
                style={[styles.Socialbuton, { backgroundColor: COLORS.Red }]}
              >
                <Icon
                  name="google"
                  type={IconType.AntDesign}
                  size={SIZES.twentyFive}
                  color={COLORS.white}
                />
              </MyTouchableOpacity>
              <MyTouchableOpacity
                style={[styles.Socialbuton, { backgroundColor: COLORS.blue }]}
              >
                <Icon
                  name="facebook-f"
                  type={IconType.FontAwesome}
                  size={SIZES.twentyFive}
                  color={COLORS.white}
                />
              </MyTouchableOpacity>
            </Row>
          </View>

          <View style={{ alignItems: "center", marginBottom: SIZES.twenty }}>
            <MyTouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => navigation.navigate(SCREENS.SignUpUser)}
            >
              <Text style={[FONTS.mediumFont14, { color: COLORS.brownGray }]}>
                Don't have any account?
              </Text>
              <Text
                style={[
                  FONTS.mediumFont14,
                  { color: COLORS.primary, marginStart: 3 },
                ]}
              >
                Sign Up
              </Text>
            </MyTouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputfiled: {
    paddingHorizontal: SIZES.twenty,
  },
  Socialbuton: {
    width: SIZES.twentyFive * 3,
    height: SIZES.twentyFive * 3,
    borderRadius: SIZES.twentyFive * 3,
    justifyContent: "center",
    alignItems: "center",
  },
  AppleButton: {
    flexDirection: "row",
    backgroundColor: COLORS.black,
    paddingHorizontal: SIZES.fifteen * 1.5,
    // width: SIZES.twentyFive * 6.8,
    height: SIZES.twentyFive * 3,
    borderRadius: SIZES.twentyFive * 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
