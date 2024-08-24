import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import UserIcon from '../icons/User';
import CalendarIcon from '../icons/CalendarIcon';
import {
  scale,
  moderateVerticalScale,
  moderateScale,
} from 'react-native-size-matters';
import { font, colors, routes } from '../utils/constants';
import { ScrollView } from 'react-native-gesture-handler';
import LeftArrowIcon from '../icons/LeftArrow';
import RightArrowIcon from '../icons/RightArrowIcon';
import { useNavigation } from '@react-navigation/native';

const forYouData = [
  {
    date: '3 / 1 / 2023',
    locationName: 'Harihar',
    personName: 'Bhushan Rokade',
    image: './../assets/Images/raigad.jpg',
  },
  {
    date: '10 / 2 / 2024',
    locationName: 'Anjineri',
    personName: 'Mayur Koli',
    image: './../assets/Images/raigad.jpg',
  },
  {
    date: '7 / 6 / 2024',
    locationName: 'Pandavleni',
    personName: 'Aditya Gaikwad',
    image: './../assets/Images/raigad.jpg',
  },
  {
    date: '1 / 1 / 2025',
    locationName: 'Visapur Fort',
    personName: 'Aditya Waghmare',
    image: './../assets/Images/raigad.jpg',
  },
  {
    date: '10 / 2 / 2024',
    locationName: 'Anjineri',
    personName: 'Mayur Koli',
    image: './../assets/Images/raigad.jpg',
  },
  {
    date: '7 / 6 / 2024',
    locationName: 'Pandavleni',
    personName: 'Aditya Gaikwad',
    image: './../assets/Images/raigad.jpg',
  },
  {
    date: '1 / 1 / 2025',
    locationName: 'Visapur Fort',
    personName: 'Aditya Waghmare',
    image: './../assets/Images/raigad.jpg',
  },
  {
    date: '10 / 2 / 2024',
    locationName: 'Anjineri',
    personName: 'Mayur Koli',
    image: './../assets/Images/raigad.jpg',
  },
  {
    date: '7 / 6 / 2024',
    locationName: 'Pandavleni',
    personName: 'Aditya Gaikwad',
    image: './../assets/Images/raigad.jpg',
  },
  {
    date: '1 / 1 / 2025',
    locationName: 'Visapur Fort',
    personName: 'Aditya Waghmare',
    image: './../assets/Images/raigad.jpg',
  },
];
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function Liked() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={'#F7F7F7'} />
      <ScrollView>
        <TouchableOpacity
          style={styles.headingView}
          onPress={() => {
            navigation.goBack();
          }}>
          <LeftArrowIcon size={scale(35)} color={'black'} />
          <Text style={styles.headingText}>Liked Trips</Text>
        </TouchableOpacity>
        <View style={styles.forYouList}>
          {forYouData.map((item, index) => {
            return (
              <TouchableOpacity style={styles.forYouItem} key={index}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require('./../assets/Images/raigad.jpg')}
                    style={styles.forYouImage}
                  />
                  <View style={styles.forYouInfoView}>
                    <Text style={[styles.locationHeading, { color: 'black' }]}>
                      {item?.locationName}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <UserIcon size={scale(15)} color='black' />
                      <Text style={[styles.personName, { color: 'black' }]}>
                        {' '}
                        {item?.personName}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <CalendarIcon size={scale(15)} color='black' />
                      <Text style={[styles.personName, { color: 'black' }]}>
                        {' '}
                        {item?.date}
                      </Text>
                    </View>
                  </View>
                </View>
                <RightArrowIcon size={scale(25)} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  personName: {
    fontSize: scale(12),
    color: 'white',
    fontFamily: font.medium,
  },
  locationHeading: {
    fontSize: scale(15),
    color: 'white',
    fontFamily: font.bold,
  },
  headingText: {
    fontFamily: font.bold,
    fontSize: scale(17),
  },
  headingView: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(40),
    gap: scale(5),
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
  },
  forYouInfoView: {
    flexDirection: 'column',
    gap: scale(3),
    marginLeft: scale(20),
  },
  forYouImage: {
    height: scale(70),
    width: scale(70),
    objectFit: 'cover',
    borderRadius: scale(10),
  },
  forYouItem: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(25),
    paddingHorizontal: scale(15),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: scale(30),
  },
  forYouList: {
    flexDirection: 'column',
    paddingBottom: scale(20),
  },
  forYouView: {
    width: windowWidth,
    flexDirection: 'column',
  },
  personName: {
    fontSize: scale(12),
    color: 'white',
    fontFamily: font.medium,
  },
});
