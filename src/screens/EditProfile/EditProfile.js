import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { colors, font } from '../../utils/constants';
import LeftArrowIcon from '../../icons/LeftArrow';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import EditIcon from '../../icons/EditIcon';

export default function EditProfile() {
  const { width: windowWidth } = useWindowDimensions();
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response) => {
        if (!response.didCancel && !response.errorCode) {
          const uri = response.assets[0].uri;
          setImageUri(uri);
        }
      }
    );
  };
  return (
    <ScrollView>
      <StatusBar
        translucent
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <View style={[styles.mainContainer, { width: windowWidth }]}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowIcon size={scale(30)} color={'black'} />
          </TouchableOpacity>
          <Text style={styles.screenHeading}>Edit Profile</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.profileImgView}>
            <TouchableOpacity style={styles.imageView} onPress={pickImage}>
              <EditIcon size={scale(20)} />
            </TouchableOpacity>
            {imageUri && (
              <Image
                source={{ uri: imageUri }}
                alt='Image'
                style={styles.image}
              />
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    paddingVertical: moderateVerticalScale(30),
    flex: 1,
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
  image: {
    width: moderateScale(150),
    height: moderateVerticalScale(150),
    borderRadius: scale(100),
  },
  imageView: {
    borderStyle: 'solid',
    borderColor: 'black',
  },
  profileImgView: {
    paddingVertical: moderateVerticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
  },
});
