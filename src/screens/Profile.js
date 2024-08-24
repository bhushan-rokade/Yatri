import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import LeftArrowIcon from '../icons/LeftArrow';
import { useNavigation } from '@react-navigation/native';
import { colors, font, routes } from '../utils/constants';
import EditIcon from './../icons/EditIcon';
import PlaneIcon from './../icons/PlaneIcon';
import RightArrowIcon from './../icons/RightArrowIcon';
import SettingIcon from './../icons/SettingIcon';
import HeartIcon from './../icons/HeartIcon';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function Profile() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      <View style={styles.container1}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowIcon size={scale(33)} color={'black'} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
          <TouchableOpacity style={styles.editBtn}>
            <EditIcon size={scale(12)} color={colors.linkViolet} />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageView}>
          <View style={styles.innerImageView}>
            <ImageBackground
              source={{
                uri: 'https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
              }}
              imageStyle={styles.profileImg}
            />
          </View>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameHeading}>Bhushan Rokade</Text>
          <Text style={styles.userName}>@rokade_bhushan</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          style={[styles.menuItem]}
          onPress={() => navigation.navigate(routes.MYTRIPS)}>
          <View style={styles.innerMenu}>
            <View style={styles.iconView}>
              <PlaneIcon size={scale(23)} color='black' />
            </View>
            <Text style={styles.menuHeading}>My Trips</Text>
          </View>
          <RightArrowIcon size={scale(23)} color='grey' />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate(routes.LIKED);
          }}>
          <View style={styles.innerMenu}>
            <View style={styles.iconView}>
              <HeartIcon size={scale(23)} color='black' />
            </View>
            <Text style={styles.menuHeading}>Liked</Text>
          </View>
          <RightArrowIcon size={scale(23)} color='grey' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.innerMenu}>
            <View style={styles.iconView}>
              <PlaneIcon size={scale(23)} color='black' />
            </View>
            <Text style={styles.menuHeading}>My Trips</Text>
          </View>
          <RightArrowIcon size={scale(23)} color='grey' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.innerMenu}>
            <View style={styles.iconView}>
              <PlaneIcon size={scale(23)} color='black' />
            </View>
            <Text style={styles.menuHeading}>My Trips</Text>
          </View>
          <RightArrowIcon size={scale(23)} color='grey' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.innerMenu}>
            <View style={styles.iconView}>
              <PlaneIcon size={scale(23)} color='black' />
            </View>
            <Text style={styles.menuHeading}>My Trips</Text>
          </View>
          <RightArrowIcon size={scale(23)} color='grey' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.innerMenu}>
            <View style={styles.iconView}>
              <SettingIcon size={scale(23)} color='black' />
            </View>
            <Text style={styles.menuHeading}>Settings</Text>
          </View>
          <RightArrowIcon size={scale(23)} color='grey' />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    paddingTop: moderateVerticalScale(40),
    height: moderateVerticalScale(330),
    width: windowWidth,
    borderRadius: scale(20),
    position: 'absolute',
    zIndex: 3,
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: 10,
  },
  container2: {
    paddingTop: moderateVerticalScale(350),
    backgroundColor: '#F7F7F7',
    height: '100%',
    paddingBottom: moderateVerticalScale(30),
    flexDirection: 'column',
  },
  menuItem: {
    height: moderateVerticalScale(60),
    width: windowWidth,
    paddingHorizontal: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(5),
    borderBottomWidth: 0.2,
    borderColor: 'lightgrey',
  },
  iconView: {
    borderWidth: 0.5,
    padding: scale(10),
    borderRadius: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerMenu: {
    flexDirection: 'row',
    width: scale(105),
    alignItems: 'center',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth,
    paddingHorizontal: scale(20),
  },
  headerText: {
    fontFamily: font.bold,
    fontSize: scale(17),
  },
  editText: {
    fontFamily: font.semiBold,
    fontSize: scale(12),
    color: colors.linkViolet,
  },
  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scale(38),
  },
  imageView: {
    height: moderateVerticalScale(180),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: scale(150),
    height: scale(150),
    objectFit: 'cover',
    borderRadius: scale(80),
  },
  innerImageView: {
    height: scale(150),
    width: scale(150),
    borderRadius: scale(80),
  },
  nameView: {
    flexDirection: 'column',
    width: windowWidth,
    alignItems: 'center',
    gap: scale(7),
  },
  nameHeading: {
    fontFamily: font.bold,
    fontSize: scale(18),
  },
  userName: {
    fontFamily: font.light,
    fontSize: scale(14),
  },
  menuHeading: {
    fontFamily: font.semiBold,
    marginLeft: moderateScale(10),
  },
});
