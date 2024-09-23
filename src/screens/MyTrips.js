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
const data = [
  {
    title: 'Harihar Fort',
    location: 'Nashik,Maharashtra',
    image: './../assets/Images/raigad.jpg',
    daysRemaining: 10,
    date: '22 March 2024,Thu',
  },
  {
    title: 'Harihar Fort',
    location: 'Nashik,Maharashtra',
    image: './../assets/Images/raigad.jpg',
    daysRemaining: 10,
    date: '22 March 2024,Thu',
  },
  {
    title: 'Harihar Fort',
    location: 'Nashik,Maharashtra',
    image: './../assets/Images/raigad.jpg',
    daysRemaining: 10,
    date: '22 March 2024,Thu',
  },
  {
    title: 'Harihar Fort',
    location: 'Nashik,Maharashtra',
    image: './../assets/Images/raigad.jpg',
    daysRemaining: 10,
    date: '22 March 2024,Thu',
  },
];
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
          {data.map((item, index) => {
            return (
              <View style={styles.tripListItem} key={index}>
                <View style={styles.dateView}>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <View style={styles.titleView}>
                  <View style={styles.imageBackView}>
                    <Image
                      source={require('./../assets/Images/raigad.jpg')}
                      style={styles.imageStyle}
                    />
                  </View>
                  <View style={styles.detailsView}>
                    <Text style={styles.detailsTitle}>{item.title}</Text>
                    <Text style={styles.detailsLoc}>{item.location}</Text>
                    <View style={styles.timeView}>
                      <ClockIcon size={scale(14)} color='grey' />
                      <Text style={styles.timeText}>
                        {item.daysRemaining} days remaining...
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.viewBtn}>
                    <Text style={[styles.btnText, { color: '#009B8D' }]}>
                      View
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelBtn}>
                    <Text style={[styles.btnText, { color: '#FF784B' }]}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cancelBtn: {
    borderWidth: 1,
    width: moderateScale(100),
    alignItems: 'center',
    borderColor: '#FF784B',
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    borderRadius: scale(12),
  },
  viewBtn: {
    borderWidth: 1,
    width: moderateScale(100),
    alignItems: 'center',
    borderColor: '#009B8D',
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    borderRadius: scale(12),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(60),
    height: moderateScale(40),
    alignItems: 'center',
    marginTop: moderateVerticalScale(10),
  },
  timeText: {
    fontSize: scale(11),
    color: 'grey',
    fontFamily: font.semiBold,
  },
  timeView: {
    flexDirection: 'row',
    gap: scale(5),
    alignItems: 'center',
    marginTop: scale(8),
  },
  detailsLoc: {
    fontSize: scale(10),
    fontFamily: font.light,
    marginTop: moderateVerticalScale(3),
  },
  detailsTitle: {
    fontSize: scale(17),
    fontFamily: font.bold,
  },
  detailsView: {
    marginLeft: moderateVerticalScale(15),
    height: moderateScale(70),
    width: moderateScale(200),
  },
  dateText: {
    fontFamily: font.semiBold,
    fontSize: scale(13),
    color: colors.grey,
  },
  dateView: {
    marginTop: moderateVerticalScale(20),
    marginLeft: moderateScale(25),
  },
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
    gap: moderateScale(10),
    marginTop: moderateVerticalScale(8),
  },
  title: {
    fontFamily: font.bold,
    fontSize: scale(16),
    marginTop: scale(0),
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
    marginTop: scale(1),
  },
  container1: {
    backgroundColor: '#F7F7F7',
    height: '100%',
    paddingTop: moderateVerticalScale(170),
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
    height: moderateVerticalScale(215),
    backgroundColor: 'white',
    marginBottom: moderateVerticalScale(20),
    marginHorizontal: moderateScale(15),
    borderRadius: scale(25),
    marginTop: moderateVerticalScale(3),
    elevation: 2,
  },
});
