import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import ClockIcon from '../../icons/ClockIcon';
import UserIcon from '../../icons/User';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { font, colors } from '../../utils/constants';
let windowWidth;
export default function SideScrollList({ data }) {
  windowWidth = useWindowDimensions().width;
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: moderateVerticalScale(20),
      }}>
      <View style={styles.upcomingList}>
        {data.map((item, index) => {
          return (
            <ImageBackground
              key={index}
              style={styles.upcomingItemContainer}
              imageStyle={styles.bgimageStyle}
              source={require('./../../assets/Images/raigad.jpg')}>
              <TouchableOpacity style={styles.upcomingItem}>
                <View style={styles.locationTextView}>
                  <ClockIcon color='white' size={scale(15)} />
                  <Text style={styles.locationtext}>
                    {' '}
                    {item.daysRemaining} days
                  </Text>
                </View>
                <View style={styles.details}>
                  <Text style={styles.locationHeading}>
                    {item.locationName}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <UserIcon size={scale(15)} color='white' />
                    <Text style={styles.personName}> {item.personName}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  personName: {
    fontSize: scale(12),
    color: 'white',
    fontFamily: font.medium,
  },
  locationHeading: {
    fontSize: scale(17),
    color: 'white',
    fontFamily: font.bold,
  },
  details: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(20),
  },
  locationTextView: {
    alignSelf: 'flex-end',
    marginRight: scale(10),
    marginTop: scale(10),
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: scale(6),
    borderRadius: scale(20),
    width: moderateScale(80),
    flexDirection: 'row',
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationtext: {
    color: 'white',
    fontSize: scale(10),
    fontFamily: font.bold,
  },
  upcomingItem: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: moderateVerticalScale(250),
    width: moderateScale(200),
    borderRadius: scale(20),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bgimageStyle: {
    borderRadius: scale(20),
    objectFit: 'cover',
  },
  upcomingItemContainer: {
    height: moderateVerticalScale(250),
    width: moderateScale(200),
    borderRadius: scale(20),
  },
  upcomingList: {
    height: moderateVerticalScale(280),
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    flexDirection: 'row',
    gap: scale(20),
  },
  seeMore: {
    fontFamily: font.semiBold,
    fontSize: scale(10),
    alignSelf: 'center',
    color: colors.grey,
  },
});
