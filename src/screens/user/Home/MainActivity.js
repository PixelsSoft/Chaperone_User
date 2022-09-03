import React, { useState, useRef } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import {
  COLORS,
  SIZES,
  STYLES,
  SCREENS,
  width,
  height,
} from "../../../constants";
import Icon, { IconType } from "../../../components/Icons";
import Notifications from "../../CommonScreens/Notification";
import Home from "../../user/Home/Home";
import Profile from "../Profile/Profile";
import JobPost from "./../JobPost/JobPost";
import { useKeyboard } from "../../../hooks/useKeyboard";

export default function MainLayout({ navigation, drawerAnimation }) {
  // const { keyboardShown } = useKeyboard();
  const [SELECTEDTAB, setSELECTEDTAB] = useState(SCREENS.Home);
  const flatlisref = useRef();

  const [translateValue] = useState(new Animated.Value(0));

  const onTabPressed = async (item) => {
    setSELECTEDTAB(item);
    switch (item) {
      case SCREENS.Home:
        flatlisref.current.scrollToIndex({
          index: 0,
          animated: true,
        });
        break;
      case SCREENS.Noitification:
        flatlisref.current.scrollToIndex({
          index: 1,
          animated: true,
        });
        break;
      case SCREENS.PostJob:
        flatlisref.current.scrollToIndex({
          index: 2,
          animated: true,
        });
        break;

      case SCREENS.Profile:
        flatlisref.current.scrollToIndex({
          index: 3,
          animated: true,
        });
        break;
    }
  };

  const CustomIcon = ({
    isFocused,
    type,
    seletedIcon,
    onPress,
    unSelectedIcon,
  }) => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <View
          style={{
            padding: SIZES.ten - 2,
            backgroundColor: COLORS.transparent,
          }}
        >
          <Icon
            name={isFocused ? seletedIcon : unSelectedIcon}
            type={type}
            color={isFocused ? COLORS.white : COLORS.brownGray}
            size={height * 0.03}
            style={{
              color: isFocused ? COLORS.black : COLORS.brownGray,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const CenterCustomIcon = ({
    isFocused,
    type,
    seletedIcon,
    onPress,
    unSelectedIcon,
  }) => {
    return (
      <TouchableOpacity
        style={{
          padding: SIZES.five,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderRadius: SIZES.fifty * 2,
        }}
        activeOpacity={0.9}
        onPress={onPress}
      >
        <Icon
          name={isFocused ? seletedIcon : unSelectedIcon}
          type={type}
          size={SIZES.twentyFive * 1.85}
          style={{
            color: isFocused ? COLORS.black : COLORS.black,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View
      //
      style={[
        {
          ...drawerAnimation,
          flex: 1,
          backgroundColor: COLORS.white,
          ...StyleSheet.absoluteFill,
          overflow: "hidden",
        },
      ]}
    >
      {/* content */}
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          ref={flatlisref}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          decelerationRate={"fast"}
          scrollEventThrottle={16}
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: COLORS.white }}
          contentContainerStyle={{ backgroundColor: COLORS.white }}
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: height,
                  width: width,
                }}
              >
                {item.screen === SCREENS.Home && <Home />}
                {item.screen === SCREENS.PostJob && <JobPost />}
                {item.screen === SCREENS.Noitification && <Notifications />}
                {item.screen === SCREENS.Profile && <Profile />}
              </View>
            );
          }}
        />
      </View>

      {/* footer */}

      {/* Tab */}

      <View
        style={
          {
            // backgroundColor: COLORS.white,
          }
        }
      >
        <View
          style={[
            STYLES.shadow,
            {
              height: SIZES.twenty * 4.5,
              flexDirection: "row",
              paddingBottom: SIZES.ten,
              paddingHorizontal: SIZES.twenty,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: COLORS.primary,

              borderTopLeftRadius: SIZES.twentyFive,
              borderTopRightRadius: SIZES.twentyFive,
            },
          ]}
        >
          <CustomIcon
            type={IconType.Ionicons}
            unSelectedIcon={"home-outline"}
            seletedIcon={"home-sharp"}
            isFocused={SELECTEDTAB === SCREENS.Home ? true : false}
            onPress={() => {
              onTabPressed(SCREENS.Home);
            }}
          />
          <CustomIcon
            type={IconType.Ionicons}
            seletedIcon={"notifications"}
            unSelectedIcon={"ios-notifications-outline"}
            isFocused={SELECTEDTAB === SCREENS.Noitification ? true : false}
            onPress={() => {
              onTabPressed(SCREENS.Noitification);
            }}
          />
          <CenterCustomIcon
            type={IconType.Ionicons}
            seletedIcon={"add-outline"}
            unSelectedIcon={"add-outline"}
            isFocused={SELECTEDTAB === SCREENS.PostJob ? true : false}
            onPress={() => {
              onTabPressed(SCREENS.PostJob);
            }}
          />

          <CustomIcon
            type={IconType.Ionicons}
            seletedIcon={"ios-person"}
            unSelectedIcon={"ios-person-outline"}
            isFocused={SELECTEDTAB === SCREENS.Profile ? true : false}
            onPress={() => {
              onTabPressed(SCREENS.Profile);
            }}
          />
          <CustomIcon
            type={IconType.Ionicons}
            seletedIcon={"menu"}
            unSelectedIcon={"menu-outline"}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </View>
      </View>
    </Animated.View>
  );
}

const CATEGORIES = [
  {
    id: "1",
    screen: SCREENS.Home,
  },
  {
    id: "2",
    screen: SCREENS.Noitification,
  },
  {
    id: "3",
    screen: SCREENS.PostJob,
  },
  {
    id: "4",
    screen: SCREENS.Profile,
  },
  {
    id: "5",
    screen: SCREENS.DrawerNavigator,
  },
];
