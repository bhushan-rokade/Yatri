import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { colors, font } from '../../utils/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ClockIcon from '../../icons/ClockIcon';

const windowWidth = Dimensions.get('window').width;
const data = [
  {
    title: 'Harihar Fort',
    location: 'Nashik, Maharashtra',
    image: require('./../../assets/Images/raigad.jpg'),
    daysRemaining: 10,
    date: '22 March 2024, Thu',
  },
  {
    title: 'Harihar Fort',
    location: 'Nashik, Maharashtra',
    image: require('./../../assets/Images/raigad.jpg'),
    daysRemaining: 10,
    date: '22 March 2024, Thu',
  },
];

export default function MyTrips() {
  const [selectedMenu, setSelectedMenu] = useState('Upcoming');
  const width = useWindowDimensions().width;
  return (
    <>
      <View style={[styles.headerContainer, { width: width }]}>
        <Text style={styles.mainHeading}>Trips</Text>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={[
              styles.btn,
              selectedMenu === 'Upcoming' && styles.btnActive,
            ]}
            onPress={() => setSelectedMenu('Upcoming')}>
            <Text
              style={[
                styles.btnText,
                selectedMenu === 'Upcoming' && styles.textActive,
              ]}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, selectedMenu === 'Past' && styles.btnActive]}
            onPress={() => setSelectedMenu('Past')}>
            <Text
              style={[
                styles.btnText,
                selectedMenu === 'Past' && styles.textActive,
              ]}>
              Past
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          {data.map((item, index) => (
            <View style={styles.tripListItem} key={index}>
              <Text style={styles.dateText}>{item.date}</Text>
              <View style={styles.tripInfo}>
                <Image source={item.image} style={styles.imageStyle} />
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
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    paddingTop: moderateVerticalScale(60),
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
    height: scale(165),
    width: windowWidth,
    borderRadius: scale(25),
    elevation: 10,
  },
  mainHeading: {
    fontFamily: font.bold,
    fontSize: scale(18),
  },
  btnView: {
    flexDirection: 'row',
    height: moderateVerticalScale(40),
    alignItems: 'center',
    width: moderateScale(320),
    marginTop: moderateVerticalScale(10),
    borderRadius: scale(25),
    borderWidth: 0.3,
    borderColor: 'grey',
  },
  btn: {
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
  listContainer: {
    backgroundColor: '#F7F7F7',
    height: '100%',
    paddingTop: moderateVerticalScale(170),
  },
  tripListItem: {
    backgroundColor: 'white',
    margin: moderateVerticalScale(10),
    padding: moderateScale(15),
    borderRadius: scale(25),
    elevation: 2,
  },
  dateText: {
    fontFamily: font.semiBold,
    fontSize: scale(13),
    color: colors.grey,
  },
  tripInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(10),
  },
  imageStyle: {
    borderRadius: scale(10),
    height: moderateVerticalScale(70),
    width: moderateScale(70),
  },
  detailsView: {
    marginLeft: moderateVerticalScale(15),
    width: moderateScale(200),
  },
  detailsTitle: {
    fontSize: scale(17),
    fontFamily: font.bold,
  },
  detailsLoc: {
    fontSize: scale(10),
    fontFamily: font.light,
    marginTop: moderateVerticalScale(3),
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(8),
  },
  timeText: {
    fontSize: scale(11),
    color: 'grey',
    fontFamily: font.semiBold,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateVerticalScale(10),
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
  cancelBtn: {
    borderWidth: 1,
    width: moderateScale(100),
    alignItems: 'center',
    borderColor: '#FF784B',
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    borderRadius: scale(12),
  },
});
