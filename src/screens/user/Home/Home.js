import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {
  COLORS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  width,
} from '../../../constants/theme';
import CircularImage from '../../../components/CircularImage';
import Row from '../../../components/Row';
import Icon, {IconType} from '../../../components/Icons';
import MyTouchableOpacity from '../../../components/MyTouchableOpacity';
import FilterSheet from '../../../components/Modals/FilterSheet';
import VendorCard from '../../../components/VendorCard';
import {
  openFilters,
  openQuickServiceSheet,
} from '../../../redux/Slices/Utiltities';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../../components/CustomButton';
import RadiusButton from '../../../components/RadiusButton';

export default function Home(props) {
  // const { navigation } = props;
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  const dispatch = useDispatch();
  const [selectCategory, setSelectCategory] = useState();

  // ============Render Near By ===================
  const NearBy = () => {
    return (
      <MyTouchableOpacity
        onPress={() =>
          //  console.log("propsss", navigation)
          navigation.navigate(SCREENS.ScheduleTime)
        }
        style={[
          styles.card,
          {
            padding: SIZES.ten,
            marginHorizontal: SIZES.fifteen,
            marginBottom: SIZES.twenty,
            marginTop: SIZES.five,
            width: width * 0.65,
          },
        ]}>
        <Row style={{alignItems: 'center'}}>
          <CircularImage image={IMAGES.User} />
          <Text
            style={[
              FONTS.mediumFont12,
              {color: COLORS.black, marginHorizontal: SIZES.ten},
            ]}>
            David John
          </Text>
        </Row>
        <Text
          style={[
            FONTS.mediumFont12,
            {color: COLORS.brownGray, marginVertical: SIZES.ten},
          ]}>
          Car Mechanic
        </Text>
        <Row style={{alignItems: 'center'}}>
          <Icon
            name={'shield'}
            type={IconType.Entypo}
            size={SIZES.twenty}
            color={COLORS.trueGreen}
          />
          <Text
            style={[
              FONTS.mediumFont12,
              {color: COLORS.trueGreen, marginHorizontal: SIZES.ten},
            ]}>
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
          ]}>
          Car Mechanic, NY {'(2Km)'}
        </Text>
        <Text style={[FONTS.mediumFont14, {color: COLORS.primary}]}>
          1.6 ratings
        </Text>
      </MyTouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={IMAGES.HomeBackground}
      resizeMode="stretch"
      style={{
        flex: 1,
        paddingTop: SIZES.ten,
        backgroundColor: COLORS.primary,
        paddingBottom: SIZES.fifty,
      }}>
      {/* <View style={{flex: 1, backgroundColor: COLORS.primary}} > */}
      {/* ///////////////header/////////////// */}
      <View
        style={{
          flex: 0.25,
          height: SIZES.twentyFive * 5,
          paddingVertical: SIZES.twenty * 2,
          paddingBottom: SIZES.twentyFive * 3,
        }}>
        <Row style={styles.header}>
          <CircularImage
            image={IMAGES.User}
            imageStyle={{
              height: SIZES.fifteen * 4,
              width: SIZES.fifteen * 4,
              borderColor: COLORS.black,
              borderWidth: 1,
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              paddingHorizontal: SIZES.fifteen,
            }}>
            <Text style={[FONTS.mediumFont12, {color: COLORS.black}]}>
              David John
            </Text>
            <Text style={[FONTS.mediumFont12, {color: COLORS.brownGray}]}>
              New York , USA
            </Text>
          </View>
        </Row>
        <MyTouchableOpacity onPress={() => navigation.navigate(SCREENS.Seacrh)}>
          <View
            style={{
              marginHorizontal: SIZES.twentyFive,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: COLORS.transparent,
              borderRadius: SIZES.ten,
              padding: SIZES.ten,
            }}>
            <Icon
              name={'search1'}
              type={IconType.AntDesign}
              color={COLORS.black}
            />
            <Text style={[FONTS.mediumFont12, {color: COLORS.black}]}>
              Search here ....
            </Text>

            <MyTouchableOpacity
              style={{padding: SIZES.ten}}
              onPress={() => {
                dispatch(openFilters());
              }}>
              <Image
                source={IMAGES.IconFilter}
                style={{
                  height: SIZES.twenty,
                  width: SIZES.twenty,
                }}
                resizeMode={'contain'}
              />
            </MyTouchableOpacity>
          </View>
        </MyTouchableOpacity>
      </View>

      {/* ==========================body================= */}
      <View style={styles.detailSection}>
        <Row
          style={{
            width: width,
            justifyContent: 'space-evenly',
            marginBottom: SIZES.twenty,
          }}>
          <CommonButton
            btnStyle={{width: width * 0.4}}
            title={'Chaperone Go With You'}
            titleStyle={{
              fontSize: SIZES.fifteen,
              textAlign: 'center',
              // marginHorizontal: SIZES.fifteen,
            }}
          />
          <RadiusButton
            btnStyle={{
              width: width * 0.4,
              backgroundColor: COLORS.white,
              borderWidth: 2,
            }}
            title={'Chaperone Go With You'}
            titleStyle={{
              fontSize: SIZES.fifteen,
              color: COLORS.black,
              // marginHorizontal: SIZES.twenty,

              textAlign: 'center',
            }}
          />
        </Row>
        {/* =================browse Category============ */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 0}}>
          {/* ================= Vendor near by you============ */}

          <Row
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: SIZES.fifteen,
              paddingHorizontal: SIZES.fifteen,
            }}>
            <Text style={[FONTS.boldFont18]}>Near you </Text>
            <Text style={[FONTS.boldFont16, {color: COLORS.gray}]}>
              See all
            </Text>
          </Row>

          <FlatList
            data={vendors}
            renderItem={({item}) => <VendorCard item={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </ScrollView>
        <MyTouchableOpacity
          onPress={() => {
            dispatch(openQuickServiceSheet());
          }}
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.ten,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: SIZES.fifteen,
            position: 'absolute',
            bottom: SIZES.twentyFive,
            right: SIZES.twentyFive,
          }}>
          <Image
            source={IMAGES.Timer}
            resizeMode={'contain'}
            style={{
              width: SIZES.twentyFive * 1.3,
              height: SIZES.twentyFive * 1.3,
              left: -5,
              marginBottom: SIZES.five,
            }}
          />
          <Text style={[FONTS.boldFont16, {color: COLORS.black}]}>Quick</Text>
          <Text style={[FONTS.boldFont16, {color: COLORS.black}]}>Service</Text>
        </MyTouchableOpacity>
      </View>
      <FilterSheet />
      {/* </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: SIZES.twenty,
  },
  detailSection: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.twentyFive * 2,
    borderTopLeftRadius: SIZES.twentyFive * 2,
    paddingTop: SIZES.twentyFive * 2,
    // paddingVertical: SIZES.twentyFive * 2,
    // paddingBottom: 100,
    // paddingVertical: SIZES.fifteen * 2,
    // marginBottom: SIZES.twentyFive * 2,
  },
  categorystyle: {
    backgroundColor: COLORS.charcoalGrey,
    margin: SIZES.fifteen,
    height: SIZES.fifty,
    width: SIZES.fifty,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.ten,
  },
  categorySelectedStyle: {
    backgroundColor: COLORS.primary,
    margin: SIZES.fifteen,
    height: SIZES.fifty,
    width: SIZES.fifty,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.ten,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: COLORS.blackWithopacity,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});

const categories = [
  {
    id: '1',
    name: 'Cleaning',
    Icon: 'customerservice',
    IconType: IconType.AntDesign,
  },
  {
    id: '2',
    name: 'Repair',
    Icon: 'fire-extinguisher',
    IconType: IconType.FontAwesome,
  },
  {
    id: '3',
    name: 'AutoMobile',
    Icon: 'plumbing',
    IconType: IconType.MaterialIcons,
  },
  {
    id: '4',
    name: 'Medical',
    Icon: 'medical-services',
    IconType: IconType.MaterialIcons,
  },
  {
    id: '5',
    name: 'Electric',
    Icon: 'electric-switch',
    IconType: IconType.MaterialCommunityIcons,
  },
  {
    id: '6',
    name: 'Mechanic',
    Icon: 'washing-machine',
    IconType: IconType.MaterialCommunityIcons,
  },
];

const vendors = [
  {
    id: 1,
    image: IMAGES.User,
    title: 'Car Mechanic',
    type: 'Car Mechanic, NY (2km)',
    ratings: '1.0 ratings',
  },
  {
    id: 2,
    image: IMAGES.User1,
    title: 'Car Mechanic',
    type: 'Car Wash, NY (1km)',
    ratings: '1.1 ratings',
  },
  {
    id: 3,
    image: IMAGES.User2,
    title: 'Car Mechanic',
    type: 'Puncture, NY (1.2km)',
    ratings: '1.2 ratings',
  },
  {
    id: 4,
    image: IMAGES.User2,
    title: 'Car Mechanic',
    type: 'Plumber, NY (0.2km)',
    ratings: '1.3 ratings',
  },
  {
    id: 5,
    image: IMAGES.User1,
    title: 'Car Mechanic',
    type: 'Bike Electrician, NY (0.5km)',
    ratings: '1.4 ratings',
  },
];
