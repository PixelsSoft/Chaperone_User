import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';

import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants';
import CustomHeader from '../../components/CustomHeader';
import EditText from '../../components/EditText';
import CommonButton from '../../components/CustomButton';
import {IconType} from '../../components/Icons';

export default function ForgetPassword(props) {
  const {navigation} = props;
  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <CustomHeader hasBackArrow />
        <Image
          source={IMAGES.Logo}
          resizeMode="contain"
          style={{
            alignSelf: 'center',
            height: SIZES.twenty * 5,

            width: SIZES.twenty * 11,
          }}
        />
        <Text style={[styles.heading, {marginTop: SIZES.twentyFive * 2}]}>
          Forgot Password?
        </Text>

        <Text style={[styles.title]}>
          Enter your email & we will send you a verification code
        </Text>
        <View style={styles.container}>
          <EditText
            styleContainer={{marginTop: SIZES.twentyFive}}
            placeholder={'Enter email'}
            hasIcon
            type={IconType.MaterialCommunityIcons}
            name={'email-outline'}
          />
          <CommonButton
            btnStyle={{marginTop: SIZES.twentyFive * 5}}
            title="Contiune"
            onPress={() => {
              navigation.navigate(SCREENS.Verification);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.twenty,
    justifyContent: 'space-between',
    marginBottom: SIZES.twentyFive,
  },
  heading: {
    alignSelf: 'center',
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twentyFive,
    color: COLORS.black,
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: SIZES.twenty,
    fontFamily: FONTFAMILY.Medium,
    marginVertical: SIZES.fifteen,
    color: COLORS.black,
  },
});
