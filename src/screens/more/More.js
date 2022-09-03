import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import MyTouchableOpacity from "../../components/MyTouchableOpacity";
import { COLORS, FONTS, IMAGES, SCREENS, SIZES, STYLES } from "../../constants";
import Icon, { IconType } from "../../components/Icons";
import Row from "../../components/Row";
import CircularImage from "../../components/CircularImage";

export default function More(props) {
  const { navigation } = props;
  const [SELECTEDTAB, SetSELECTEDTAB] = useState();
  const [isLogoutModalVisible, setisLogoutModalVisible] = useState(false);

  const logout = () => {
    setisLogoutModalVisible(true);
  };

  const navigateToNextScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  const DrawerBtn = ({ name, IconName, type, Screen }) => {
    return (
      <MyTouchableOpacity
        activeOpacity={1}
        style={[
          STYLES.drawerItem,
          {
            backgroundColor:
              SELECTEDTAB === name ? COLORS.primary : COLORS.white,
          },
        ]}
        // onPressIn={() => SetSELECTEDTAB(name)}
        onPressOut={() => SetSELECTEDTAB(" ")}
        onPress={() => {
          SetSELECTEDTAB(name);
          navigateToNextScreen(Screen);
          // navigation.toggleDrawer();
        }}
      >
        <Row style={{ alignSelf: "flex-start", alignItems: "center" }}>
          <Icon
            name={IconName}
            type={type}
            style={[
              STYLES.drawerIcon,
              { color: SELECTEDTAB === name ? COLORS.white : COLORS.black },
            ]}
          />
          <Text
            style={[
              STYLES.drawerText,
              {
                color: SELECTEDTAB === name ? COLORS.white : COLORS.black,
              },
            ]}
          >
            {name}
          </Text>
        </Row>
      </MyTouchableOpacity>
    );
  };
  return (
    <View style={STYLES.container}>
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
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.ten,
          paddingTop: SIZES.ten,
        }}
      >
        <DrawerBtn
          name={"Near By"}
          IconName="location-outline"
          type={IconType.Ionicons}
          Screen={SCREENS.NearByMapView}
        />
        <DrawerBtn
          name={"Notification"}
          IconName="notifications-outline"
          type={IconType.Ionicons}
          Screen={SCREENS.NotificationSetting}
        />
        <DrawerBtn
          name={"Term And Condition"}
          IconName="file"
          type={IconType.Octicons}
          Screen={SCREENS.TermsAndConditions}
        />
        <DrawerBtn
          name={"Settings"}
          IconName="setting"
          type={IconType.AntDesign}
          Screen={SCREENS.Setting}
        />
        <DrawerBtn
          name={"Support"}
          IconName="questioncircleo"
          type={IconType.AntDesign}
          Screen={SCREENS.HelpAndSupport}
        />
      </View>

      {/* Start of Logout Container */}
      <MyTouchableOpacity
        activeOpacity={0.2}
        style={[
          STYLES.drawerItem,
          {
            // marginTop: SIZES.twentyFive * 11,
            marginBottom: SIZES.twenty,
            // backgroundColor: logOutView.bgColor,
          },
        ]}
        onPress={() => {
          logout();
        }}
        // onPressIn={() =>

        //   setLogOutView({ textColor: COLORS.white, bgColor: COLORS.primary })
        // }
        // onPressOut={() =>
        //   setLogOutView({
        //     textColor: COLORS.black,
        //     bgColor: COLORS.white,
        //   })
        // }
      >
        <Row style={{ alignSelf: "flex-start", alignItems: "center" }}>
          <Icon
            name={"logout"}
            type={IconType.SimpleLineIcons}
            style={[STYLES.drawerIcon, { color: COLORS.black }]}
          />
          <Text style={[STYLES.drawerText, { color: COLORS.black }]}>
            Log Out
          </Text>
        </Row>
      </MyTouchableOpacity>
      {/* End of Logout Container */}

      {/* Start of Logout Modal */}
      <Modal
        isVisible={isLogoutModalVisible}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SIZES.ten * 2,
            borderRadius: SIZES.ten,
            borderWidth: 1.5,
            borderColor: COLORS.primary,
          }}
        >
          <Image
            source={IMAGES.Logo}
            resizeMode={"contain"}
            style={{
              alignSelf: "center",
              width: SIZES.twentyFive * 6,
              height: SIZES.twentyFive * 3,
            }}
          />

          <Text
            style={[
              STYLES.mediumText,
              { marginVertical: SIZES.twenty, textAlign: "center" },
            ]}
          >
            Are you sure you want to logout?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <MyTouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.Splash);
              }}
              style={{
                padding: SIZES.ten,
                width: SIZES.fifty,
                alignItems: "center",
                marginEnd: SIZES.five,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.ten,
              }}
            >
              <Text style={[STYLES.mediumText, { color: COLORS.white }]}>
                Yes
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              onPress={() => toggleModal()}
              style={{
                padding: SIZES.ten,
                width: SIZES.fifty,
                alignItems: "center",
                marginStart: SIZES.five,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.ten,
              }}
            >
              <Text style={[STYLES.mediumText, { color: COLORS.white }]}>
                No
              </Text>
            </MyTouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* End of Logout Modal */}
    </View>
  );
}

const styles = StyleSheet.create({});
