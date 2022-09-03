import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  COLORS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from '../../../constants/theme';
import CustomHeader from '../../../components/CustomHeader';
import Row from '../../../components/Row';
import CircularImage from '../../../components/CircularImage';
import MyTouchableOpacity from '../../../components/MyTouchableOpacity';
import Icon, {IconType} from '../../../components/Icons';
import EditText from '../../../components/EditText';
import CustomButton from '../../../components/CustomButton';
import PhoneNumberInput from '../../../components/PhoneNumberInput';

export default function EditProfile(props) {
  const {navigation} = props;
  const [phone, setPhone] = React.useState('');
  const [flag, setFlag] = React.useState('');

  const phoneInput = React.useRef(null);
  const phoneRef = React.useRef(null);

  const phoneParentRef = React.useRef({phoneInput, phoneRef});

  const nameRef = React.createRef(null);
  const emailRef = React.createRef(null);
  const addressRef = React.createRef(null);

  useEffect(() => {
    if (phoneInput.current?.isValidNumber(phone)) {
      addressRef.current.focus();
    }
  }, [phone]);

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={'Edit Profile'} />
      <Row style={styles.header}>
        <MyTouchableOpacity>
          <CircularImage
            image={IMAGES.User}
            imageStyle={{
              height: SIZES.twenty * 4,
              width: SIZES.twenty * 4,
              borderColor: COLORS.primary,
              borderWidth: 1,
            }}
          />
          <MyTouchableOpacity style={styles.iconstyle}>
            <Icon
              name={'camera'}
              type={IconType.Entypo}
              size={SIZES.fifteen}
              color={COLORS.white}
            />
          </MyTouchableOpacity>
        </MyTouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal: SIZES.fifteen,
          }}>
          <Text style={[FONTS.mediumFont14, {color: COLORS.black}]}>
            David John
          </Text>
          <Text style={[FONTS.mediumFont14, {color: COLORS.primary}]}>
            New York , USA
          </Text>
        </View>
      </Row>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.twenty,
          flexGrow: 1,
        }}>
        <EditText
          ref={nameRef}
          placeholder={'Name'}
          onSubmitEditing={() => {
            emailRef.current.focus();
          }}
        />
        <EditText
          ref={emailRef}
          placeholder={'Email'}
          onSubmitEditing={() => {
            phoneParentRef.current.phoneRef.current.focus();
          }}
        />
        <PhoneNumberInput
          ref={phoneParentRef}
          defaultCode="US"
          layout="first"
          value={phone}
          onSelect={flag => {
            setFlag(flag);
          }}
          onChangeText={text => {
            setPhone(text);
          }}
          onSubmitEditing={() => {
            addressRef.current.focus();
          }}
        />
        <EditText placeholder={'Address'} ref={addressRef} />
        {/* <EditText placeholder={'Password'} password />
        <EditText placeholder={'Confirm Password'} password /> */}
        <CustomButton
          title={'Save & Continue'}
          onPress={() => {
            navigation.navigate(SCREENS.UserMainLayout);
          }}
          btnStyle={{marginVertical: SIZES.twentyFive}}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: SIZES.twenty,
  },
  iconstyle: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    position: 'absolute',
    padding: SIZES.ten * 0.8,
    borderRadius: width,
    bottom: 0,
    right: 0,
  },
});
