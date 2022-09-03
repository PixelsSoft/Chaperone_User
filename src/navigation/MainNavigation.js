import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants';
import Login from '../screens/auth/Login';
import Splash from '../screens/auth/Splash';
import Verification from '../screens/auth/Verification';
import ForgetPassword from '../screens/auth/ForgetPassword';
import LoginAccount from '../screens/auth/LoginAccount';
import SignUpUser from '../screens/auth/SignUpUser';
import CreateAccount from '../screens/auth/CreateAccount';
import SignUpVender from '../screens/auth/SignUpVender';
import DrawerNavigator from './Drawer/index';
import EditProfile from '../screens/user/Profile/EditProfile';
import UserHome from '../screens/user/Home/Home';
import TermAndCondition from '../screens/Content/TermAndCondition';
import NotificationSettings from '../screens/Settings/NotificationSettings';
import Settings from '../screens/Settings/Settings';
import AboutApp from '../screens/Content/AboutApp';
import Support from '../screens/Content/Support';
import Booking from '../screens/Booking/Booking';
import BookingConfirm from '../screens/Booking/BookingConfirm';
import Rating from '../screens/Booking/Rating';
import VendorProfile from '../screens/vender/profile/VendorProfile';
import QuickServiceSheet from '../components/Modals/QuickServiceSheet';
import Nearby from '../screens/NearBy/Nearby';
import Search from '../screens/Search/Search';
import PrivacyAndPolicy from '../screens/Content/PrivacyAndPolicy';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

/*

Customer or Vendor ki alag alag apps bnengi..........

*/

import More from '../screens/more/More';

export default function (props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={screenOptions}
          initialRouteName={SCREENS.Splash}>
          <Stack.Screen name={SCREENS.Login} component={Login} />
          <Stack.Screen name={SCREENS.Splash} component={Splash} />
          <Stack.Screen name={SCREENS.Verification} component={Verification} />
          <Stack.Screen name={SCREENS.Startup} component={LoginAccount} />
          <Stack.Screen
            name={SCREENS.CreateAccount}
            component={CreateAccount}
          />
          <Stack.Screen name={SCREENS.SignUpUser} component={SignUpUser} />
          <Stack.Screen name={SCREENS.SignUpVendor} component={SignUpVender} />
          <Stack.Screen
            name={SCREENS.ForgotPassword}
            component={ForgetPassword}
          />
          <Stack.Screen
            name={SCREENS.DrawerNavigator}
            component={DrawerNavigator}
          />
          <Stack.Screen name={SCREENS.EditProfile} component={EditProfile} />
          <Stack.Screen name={SCREENS.UserHome} component={UserHome} />

          <Stack.Screen
            name={SCREENS.NotificationSetting}
            component={NotificationSettings}
          />
          <Stack.Screen
            name={SCREENS.TermsAndConditions}
            component={TermAndCondition}
          />
          <Stack.Screen name={SCREENS.AboutApp} component={AboutApp} />
          <Stack.Screen
            name={SCREENS.PrivacyAndPolicy}
            component={PrivacyAndPolicy}
          />
          <Stack.Screen name={SCREENS.Setting} component={Settings} />
          <Stack.Screen name={SCREENS.Seacrh} component={Search} />
          <Stack.Screen name={SCREENS.HelpAndSupport} component={Support} />
          <Stack.Screen name={SCREENS.ScheduleTime} component={Booking} />
          <Stack.Screen name={SCREENS.Rating} component={Rating} />
          <Stack.Screen name={SCREENS.NearByMapView} component={Nearby} />
          <Stack.Screen name={SCREENS.More} component={More} />
          <Stack.Screen
            name={SCREENS.VendorProfile}
            component={VendorProfile}
          />
          <Stack.Screen
            name={SCREENS.BookingConfirm}
            component={BookingConfirm}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
