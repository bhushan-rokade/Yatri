import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { colors, font } from '../utils/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ClockIcon from '../icons/ClockIcon';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function MyTrips() {
  const [selectedMenu, setSelectedMenu] = useState('Upcoming');
  return (
    <>
      <View style={styles.container2}>
        <Text style={styles.mainHeading}>Trips</Text>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={[
              styles.btnUpcoming,
              selectedMenu == 'Upcoming' && styles.btnActive,
            ]}
            onPress={() => setSelectedMenu('Upcoming')}>
            <Text
              style={[
                styles.btnText,
                selectedMenu == 'Upcoming' && styles.textActive,
              ]}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnPast, selectedMenu == 'Past' && styles.btnActive]}
            onPress={() => setSelectedMenu('Past')}>
            <Text
              style={[
                styles.btnText,
                selectedMenu == 'Past' && styles.textActive,
              ]}>
              Past
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container1}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.tripListItem}>
            <View style={styles.titleView}>
              <View style={styles.imageBackView}>
                <Image
                  source={require('./../assets/Images/raigad.jpg')}
                  style={styles.imageStyle}
                />
              </View>
              <View style={styles.innerTitleView}>
                <Text style={styles.title}>Raigad</Text>
                <Text style={styles.userName}>@ rokade_bhushan</Text>
                <View style={styles.mainTag}>
                  <Text style={styles.tagText}>Nature</Text>
                </View>
              </View>
            </View>
            <View style={styles.detailsView}>
              <View style={styles.clockView}>
                <ClockIcon size={scale(20)} />
              </View>
              <Text style={styles.timingDate}>Wed 10th Sept</Text>
            </View>
            <View style={styles.actionView}>
              <TouchableOpacity style={styles.editBtn}>
                <Text style={[styles.btnsText, { color: 'white' }]}>
                  Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.editBtn, { backgroundColor: 'red' }]}>
                <Text style={[styles.btnsText, { color: 'white' }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tagText: {
    fontFamily: font.semiBold,
    fontSize: scale(12),
  },
  editBtn: {
    width: moderateScale(120),
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateVerticalScale(35),
    borderRadius: scale(20),
  },
  btnsText: {
    fontFamily: font.bold,
    fontSize: scale(13),
  },
  actionView: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateVerticalScale(50),
    gap: moderateScale(20),
    marginTop: moderateVerticalScale(8),
  },
  timingDate: {
    marginLeft: moderateScale(17),
    fontFamily: font.semiBold,
    fontSize: scale(12),
  },
  clockView: {
    padding: scale(8),
    backgroundColor: '#E9E9E9',
    borderRadius: scale(28),
    marginLeft: moderateScale(20),
  },
  detailsView: {
    width: moderateScale(270),
    backgroundColor: '#F8F7FB',
    marginHorizontal: scale(30),
    height: moderateVerticalScale(50),
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: scale(15),
    marginTop: scale(0),
  },
  mainTag: {
    width: scale(60),
    backgroundColor: '#E9E9E9',
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateVerticalScale(25),
    borderRadius: scale(15),
  },
  userName: {
    fontFamily: font.semiBold,
    fontSize: scale(12),
  },
  title: {
    fontFamily: font.bold,
    fontSize: scale(16),
    marginTop: scale(8),
  },
  innerTitleView: {
    marginLeft: moderateScale(15),
    width: moderateScale(200),
    height: '100%',
    gap: scale(5),
  },
  imageBackView: {
    height: moderateVerticalScale(70),
    width: moderateScale(70),
    borderRadius: scale(40),
    marginLeft: moderateScale(26),
  },
  imageStyle: {
    borderRadius: scale(10),
    objectFit: 'cover',
    height: moderateVerticalScale(70),
    width: moderateScale(70),
  },
  titleView: {
    height: moderateVerticalScale(100),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: scale(5),
  },
  container1: {
    backgroundColor: '#F7F7F7',
    height: '100%',
    paddingTop: moderateVerticalScale(190),
  },
  container2: {
    backgroundColor: 'white',
    paddingTop: moderateVerticalScale(60),
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
    height: scale(165),
    width: windowWidth,
    borderRadius: scale(25),
    flexDirection: 'column',
    elevation: 10,
    shadowOffset: 1,
  },
  mainHeading: {
    fontFamily: font.bold,
    fontSize: scale(18),
  },
  btnView: {
    marginTop: moderateVerticalScale(25),
    flexDirection: 'row',
    height: moderateVerticalScale(40),
    alignItems: 'center',
    width: moderateScale(320),
    borderRadius: scale(25),
    borderWidth: 0.3,
    borderColor: 'grey',
  },
  btnUpcoming: {
    width: moderateScale(160),
    height: '100%',
    borderRadius: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  btnPast: {
    width: moderateScale(160),
    height: '100%',
    borderRadius: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnActive: {
    backgroundColor: colors.primaryColor,
  },
  textActive: {
    color: 'white',
  },
  btnText: {
    fontFamily: font.semiBold,
    fontSize: scale(13),
  },
  tripListItem: {
    height: moderateVerticalScale(225),
    backgroundColor: 'white',
    marginBottom: moderateVerticalScale(20),
    marginHorizontal: moderateScale(15),
    borderRadius: scale(25),
    elevation: 2,
  },
});
