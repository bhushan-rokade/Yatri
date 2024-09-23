import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import { colors, font, routes } from '../utils/constants';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import UserIcon from '../icons/User';
import DownArrowIcon from '../icons/DownArrowIcon';
import SearchIcon from '../icons/SearchIcon';
import ClockIcon from '../icons/ClockIcon';
import CalendarIcon from '../icons/CalendarIcon';
import { useNavigation } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const tags = [
  { name: 'Nature' },
  { name: 'Hostoric' },
  { name: 'Ancient' },
  { name: 'Explore' },
  { name: 'Urban' },
  { name: 'Mountains' },
  { name: 'Beach' },
];
const upcomingData = [
  {
    daysRemaining: 3,
    locationName: 'Raigad',
    personName: 'Bhushan Rokade',
    image: './../assets/Images/raigad.jpg',
  },
  {
    daysRemaining: 5,
    locationName: 'Sinhagad',
    personName: 'Kalpesh Kulkarni',
    image: './../assets/Images/raigad.jpg',
  },
  {
    daysRemaining: 6,
    locationName: 'Tamhini Ghat',
    personName: 'Bhushan Mote',
    image: './../assets/Images/raigad.jpg',
  },
  {
    daysRemaining: 10,
    locationName: 'Malshej Ghat',
    personName: 'Andurag Gaikwad',
    image: './../assets/Images/raigad.jpg',
  },
];
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
];
export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: 'white' }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.homeHeader}>
              <View style={styles.locationView}>
                <Text style={styles.locationText}>Location</Text>
                <View style={styles.locationTextMainView}>
                  <Text style={styles.locationTextMain}>Nashik</Text>
                  <TouchableOpacity style={styles.arrowIcon}>
                    <DownArrowIcon size={scale(22)} />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.PROFILE)}
                style={styles.usericon}>
                <UserIcon size={30} color='black' />
              </TouchableOpacity>
            </View>
            <View style={styles.searchView}>
              <View style={styles.searchicon}>
                <SearchIcon color={colors.grey} />
              </View>

              <TextInput
                style={styles.searchInput}
                placeholder={'Search Here'}
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                }}
              />
              {searchText != '' && (
                <TouchableOpacity
                  onPress={() => {
                    setSearchText('');
                  }}
                  style={{
                    alignSelf: 'center',
                    width: moderateScale(30),
                    height: moderateScale(30),
                    marginLeft: moderateScale(15),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{ fontFamily: font.bold, fontSize: scale(13) }}>
                    X
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.tagsView}>
                {tags.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={
                        selectedTag == index ? styles.selectedTag : styles.tag
                      }
                      key={index}
                      onPress={() => {
                        setSelectedTag(index);
                      }}>
                      <Text
                        style={{
                          color: selectedTag == index ? 'white' : 'grey',
                          fontFamily: font.medium,
                        }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
            <View style={styles.upcomingView}>
              <View style={styles.upcomingTextView}>
                <Text style={styles.upcomingText}>Upcoming Near You!</Text>
                <Text style={styles.seeMore}>See More</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                  marginTop: moderateVerticalScale(20),
                }}>
                <View style={styles.upcomingList}>
                  {upcomingData.map((item, index) => {
                    return (
                      <ImageBackground
                        key={index}
                        style={styles.upcomingItemContainer}
                        imageStyle={styles.bgimageStyle}
                        source={require('./../assets/Images/raigad.jpg')}>
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
                              <Text style={styles.personName}>
                                {' '}
                                {item.personName}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </ImageBackground>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            <View style={styles.forYouView}>
              <View
                style={[
                  styles.upcomingTextView,
                  { paddingHorizontal: scale(15) },
                ]}>
                <Text style={styles.upcomingText}>For You!</Text>
                <Text style={styles.seeMore}>See More</Text>
              </View>
              <View style={styles.forYouList}>
                {forYouData.map((item, index) => {
                  return (
                    <TouchableOpacity style={styles.forYouItem} key={index}>
                      <Image
                        source={require('./../assets/Images/raigad.jpg')}
                        style={styles.forYouImage}
                      />
                      <View style={styles.forYouInfoView}>
                        <Text
                          style={[styles.locationHeading, { color: 'black' }]}>
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
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
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
    marginTop: moderateVerticalScale(20),
    paddingHorizontal: scale(15),
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
  upcomingTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    alignItems: 'center',
  },
  upcomingText: {
    fontSize: scale(15),
    fontFamily: font.semiBold,
  },
  upcomingView: {
    marginTop: moderateVerticalScale(20),
    flexDirection: 'column',
  },
  selectedTag: {
    backgroundColor: colors.primaryColor,
    height: scale(30),
    width: scale(75),
    justifyContent: 'center',
    borderRadius: scale(10),
    alignItems: 'center',
  },
  tag: {
    height: scale(30),
    width: scale(75),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: scale(10),
    alignItems: 'center',
  },
  tagsView: {
    marginTop: moderateVerticalScale(20),
    gap: scale(15),
    flexDirection: 'row',
    paddingHorizontal: scale(10),
  },
  searchInput: {
    width: windowWidth / 1.75,
    height: scale(50),
  },
  searchicon: {
    marginLeft: scale(15),
  },
  arrowIcon: {
    alignSelf: 'center',
    marginLeft: scale(4),
    marginTop: scale(4),
  },
  searchView: {
    marginTop: moderateVerticalScale(5),
    backgroundColor: '#F7F7F7',
    width: windowWidth / 1.1,
    height: moderateVerticalScale(45),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
    flexDirection: 'row',
    gap: scale(12),
    alignItems: 'center',
  },
  locationText: {
    fontFamily: font.light,
    fontSize: scale(13),
    marginLeft: scale(5),
  },
  usericon: {
    alignSelf: 'center',
  },
  locationTextMainView: {
    marginLeft: scale(13),
    marginTop: scale(5),
    flexDirection: 'row',
  },
  locationTextMain: {
    fontFamily: font.semiBold,
    fontSize: scale(17),
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: scale(20),
  },
  content: {
    marginTop: moderateVerticalScale(30),
  },
});
