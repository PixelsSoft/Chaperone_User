import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, STYLES} from '../../../constants/theme';
import CustomHeader from '../../../components/CustomHeader';
import EditText from '../../../components/EditText';
import MyTouchableOpacity from '../../../components/MyTouchableOpacity';
import Icon, {IconType} from '../../../components/Icons';
import CustomButton from '../../../components/CustomButton';
import SelectDropdown from 'react-native-select-dropdown';

import MultiDropdownPicker from '../../../components/MultiDropDownPicker';
export default function JobPost() {
  const [identity, setIdentity] = React.useState();

  const Categories = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <SafeAreaView style={STYLES.container}>
      <CustomHeader
        title={'Post Job'}
        containerStyle={{paddingVertical: SIZES.ten}}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SIZES.twenty,
          flexGrow: 1,
        }}>
        <EditText
          title={'Service Caption'}
          styleContainer={{marginTop: SIZES.twenty}}
          placeholder={'Type Here'}
        />
        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.black,
              marginVertical: SIZES.fifteen,
            },
          ]}>
          Service Category
        </Text>
        <MultiDropdownPicker
          icon
          viewProperty="name"
          name={'Choose an option'}
          value={identity}
          data={identities}
          onChangeValue={val => {
            // console.log(text);
            setIdentity(val.name);
          }}
        />
        {/* <SelectDropdown
          buttonStyle={styles.dropdownstyle}
          buttonTextStyle={{
            textAlign: "left",
            paddingHorizontal: SIZES.twenty,
            right: 0,
          }}
          data={Categories}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
        /> */}

        <EditText
          title={'Rate Required'}
          styleContainer={{marginTop: SIZES.twenty}}
          placeholder={'Type Here'}
        />
        <EditText
          title={'Location'}
          styleContainer={{marginTop: SIZES.twenty}}
          placeholder={'Type Here'}
        />
        <EditText
          title={'Address'}
          styleContainer={{marginTop: SIZES.twenty}}
          placeholder={'Type Here'}
        />
        <EditText
          title={'Availibility'}
          styleContainer={{marginTop: SIZES.twenty}}
          placeholder={'Type Here'}
        />
        <EditText
          title={'Job Description'}
          placeholder={'Type Here'}
          multiline
          style={{height: SIZES.twentyFive * 5, textAlignVertical: 'top'}}
          styleContainer={{marginTop: SIZES.twenty}}
        />

        <MyTouchableOpacity style={styles.uploadBtn}>
          <Icon
            type={IconType.MaterialCommunityIcons}
            name={'cloud-upload'}
            color={COLORS.primary}
            size={SIZES.twentyFive * 4}
          />
          <Text style={[FONTS.boldFont16]}>Upload Photo</Text>
          <Text
            style={[
              FONTS.mediumFont12,
              {color: COLORS.gray, marginTop: SIZES.ten},
            ]}>
            Please Upload clear and Hige Quality Photo
          </Text>
        </MyTouchableOpacity>

        <CustomButton
          title={'Post'}
          btnStyle={{
            marginVertical: SIZES.twentyFive,
            marginBottom: SIZES.twentyFive * 4,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  uploadBtn: {
    marginTop: SIZES.twenty,
    borderRadius: SIZES.fifteen,
    borderWidth: 2,
    alignItems: 'center',
    borderStyle: 'dashed',
    paddingVertical: SIZES.twentyFive,
    borderColor: COLORS.brownGray + 65,
  },
  dropdownstyle: {
    borderRadius: SIZES.fifteen,
    width: '100%',
    backgroundColor: COLORS.transparent,
    borderWidth: 0.5,
  },
});

const identities = [
  {id: 1, name: 'something'},
  {id: 2, name: 'something1'},
  {id: 3, name: 'something2'},
];
