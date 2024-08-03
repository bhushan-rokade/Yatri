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
} from 'react-native';
import { colors, font } from '../utils/constants';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import UserIcon from '../icons/User';
import DownArrowIcon from '../icons/DownArrowIcon';
import SearchIcon from '../icons/SearchIcon';

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
export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  return (
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.homeHeader}>
            <View style={styles.locationView}>
              <Text style={styles.locationText}>Location</Text>
              <View style={styles.locationTextMainView}>
                <Text style={styles.locationTextMain}>Nashik</Text>
                <View style={styles.arrowIcon}>
                  <DownArrowIcon size={scale(22)} />
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.usericon}>
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
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontFamily: font.bold }}>x</Text>
              </TouchableOpacity>
            )}
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.tagsView}>
              {tags.map((item, index) => {
                return (
                  <View
                    style={
                      selectedTag == index ? styles.selectedTag : styles.tag
                    }
                    key={index}
                    onPress={() => {
                      setSelectedTag(index);
                      console.log(index);
                    }}>
                    <Text style={{ color: 'white', fontFamily: font.medium }}>
                      {item.name}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  setSelectedTag: {
    backgroundColor: colors.primaryColor,
  },
  tag: {
    height: scale(30),
    width: scale(75),
    backgroundColor: '#858585',
    justifyContent: 'center',
    borderRadius: scale(5),
    alignItems: 'center',
  },
  tagsView: {
    marginTop: moderateVerticalScale(20),
    gap: scale(15),
    flexDirection: 'row',
    paddingHorizontal: scale(20),
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
    marginTop: moderateVerticalScale(10),
    backgroundColor: '#F7F7F7',
    width: windowWidth / 1.25,
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
