import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {
  moderateVerticalScale,
  moderateScale,
  scale,
} from 'react-native-size-matters';
import { launchImageLibrary } from 'react-native-image-picker';
import { colors, font } from '../../utils/constants';
import LeftArrowIcon from '../../icons/LeftArrow';
import EditIcon from '../../icons/EditIcon';
import CloseIcon from '../../icons/CloseIcon';
import PlusIcon from '../../icons/PlusIcon';

export default function AddTrip() {
  const navigation = useNavigation();
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState(['Nature', 'Adventure']);
  const [locationLink, setLocationLink] = useState('');

  // check if the link is a valid Google Maps URL
  const setLink = (text) => {
    setLocationLink(text);
  };

  // pick multiple images
  const pickImages = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 0,
        quality: 1,
      },
      (response) => {
        if (!response.didCancel && !response.errorCode) {
          const newUris = response.assets.map((asset) => asset.uri);
          setImages((prev) => [...prev, ...newUris]);
        }
      }
    );
  };

  // remove one image by index
  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  //Test

  return (
    <ScrollView
      style={{
        backgroundColor: colors.lightgrey,
        flex: 1,
      }}>
      <StatusBar
        translucent
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <View style={styles.mainView}>
        {/* Header */}
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowIcon size={scale(30)} color={'black'} />
          </TouchableOpacity>
          <Text style={styles.screenHeading}>Add Trip</Text>
        </View>

        {/* Trip Inputs */}
        <View style={styles.textInputSection}>
          <TextInput placeholder='Trip Title' style={styles.titleInput} />
          <TextInput
            placeholder='Trip Description'
            style={styles.descInput}
            multiline={true}
          />
        </View>

        {/* Image Input */}
        <View style={styles.imageInput}>
          <View style={styles.imageLabelContainer}>
            <Text style={styles.imageLabel}>Select Images</Text>
            <TouchableOpacity onPress={pickImages}>
              <EditIcon size={scale(20)} color={'lightblue'} />
            </TouchableOpacity>
          </View>

          {/* Display selected images */}
          <View style={styles.imageGrid}>
            {images.map((uri, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={{ uri }} style={styles.selectedImage} />
                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => removeImage(index)}>
                  <CloseIcon size={scale(15)} color='white' />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Tags Input */}
        <View style={styles.TagsView}>
          <View style={styles.tagHeader}>
            <Text style={styles.tagHeaderText}>Tags</Text>
            <TouchableOpacity style={styles.addTagBtn} onPress={() => {}}>
              <PlusIcon size={scale(20)} color={'black'} />
              <Text style={styles.addTagText}>Add Tag</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tagsContainer}>
            {tags.map((tag, index) => {
              return (
                <TouchableOpacity key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Location Input */}
        <View style={styles.locationView}>
          <Text style={styles.locationHeaderText}>Location Details</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.LocationLabel}>Location Name</Text>
            <TextInput
              placeholder='Enter Location Name'
              style={styles.locationInput}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.LocationLabel}>Location Link</Text>
            <TextInput
              placeholder='Enter Location Google Maps Link'
              style={styles.locationInput}
              value={locationLink}
              onChangeText={setLink} // 👈 validate on input
            />
          </View>
          {locationLink.length > 0 && (
            <TouchableOpacity
              style={styles.mapPreview}
              onPress={() => Linking.openURL(locationLink)}>
              <Text style={styles.LocationLabel}>Open Location</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  mapPreview: {
    height: moderateVerticalScale(40),
    marginHorizontal: moderateScale(20),
    width: moderateScale(140),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateVerticalScale(10),
    borderRadius: scale(10),
    backgroundColor: colors.primaryColor,
    overflow: 'hidden',
  },
  locationHeaderText: {
    fontFamily: font.bold,
    fontSize: scale(15),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateVerticalScale(10),
  },
  LocationLabel: {
    fontFamily: font.semiBold,
    fontSize: scale(12),
  },
  locationInput: {
    fontSize: scale(13),
    fontFamily: font.semiBold,
    color: '#4d4d4d',
    height: moderateVerticalScale(40),
    textAlignVertical: 'center',
    borderWidth: 0.5,
    borderColor: '#d9d9d9',
    borderRadius: scale(10),
    paddingHorizontal: moderateScale(10),
  },
  inputWrapper: {
    marginHorizontal: moderateScale(20),
    backgroundColor: 'white',
    paddingVertical: moderateScale(10),
    gap: moderateVerticalScale(5),
  },
  locationView: {
    backgroundColor: 'white',
    paddingVertical: moderateScale(10),
    marginVertical: moderateVerticalScale(20),
    marginHorizontal: moderateScale(20),
    borderRadius: scale(10),
  },
  tagText: {
    fontFamily: font.semiBold,
    fontSize: scale(13),
  },
  tag: {
    borderWidth: 0.5,
    borderColor: colors.primaryColor,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(5),
    borderRadius: scale(10),
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: moderateScale(10),
    paddingBottom: moderateVerticalScale(10),
    marginTop: moderateVerticalScale(10),
    gap: moderateScale(10),
  },
  tagHeaderText: {
    fontFamily: font.bold,
    fontSize: scale(15),
  },
  addTagText: {
    fontFamily: font.semiBold,
    fontSize: scale(10),
  },
  addTagBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(3),
    borderWidth: 0.5,
    padding: moderateScale(5),
    borderRadius: scale(10),
  },
  tagHeader: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateVerticalScale(10),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  TagsView: {
    marginTop: moderateVerticalScale(20),
    backgroundColor: 'white',
    minHeight: moderateVerticalScale(50),
    marginHorizontal: moderateScale(20),
    borderRadius: scale(10),
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: moderateScale(10),
    paddingBottom: moderateVerticalScale(10),
    marginTop: moderateVerticalScale(10),
    gap: moderateScale(10),
  },
  imageWrapper: {
    position: 'relative',
  },
  selectedImage: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(10),
  },
  removeBtn: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: scale(10),
    padding: scale(3),
  },
  imageLabelContainer: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateVerticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageLabel: {
    fontSize: scale(15),
    fontFamily: font.semiBold,
  },
  imageInput: {
    backgroundColor: 'white',
    minHeight: moderateVerticalScale(40),
    marginHorizontal: moderateScale(20),
    borderRadius: scale(10),
    justifyContent: 'center',
  },
  descInput: {
    fontSize: scale(12),
    fontFamily: font.semiBold,
    color: '#4d4d4d',
    height: moderateVerticalScale(50),
    textAlignVertical: 'top',
  },
  titleInput: {
    fontSize: scale(18),
    fontFamily: font.bold,
  },
  textInputSection: {
    marginVertical: moderateVerticalScale(10),
    marginHorizontal: moderateScale(20),
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
    borderRadius: scale(10),
    gap: moderateVerticalScale(20),
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(15),
    gap: moderateScale(10),
  },
  screenHeading: {
    fontFamily: font.bold,
    fontSize: scale(20),
  },
  mainView: {
    marginVertical: moderateVerticalScale(30),
    backgroundColor: colors.lightgrey,
  },
});
