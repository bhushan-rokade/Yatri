import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
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
  const [imageUri, setImageUri] = useState(
    'https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
  );

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
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}>
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
            <View style={styles.profileImgViewContainer}>
              <ImageBackground
                source={{
                  uri: imageUri,
                }}
                alt='Image'
                style={styles.image}>
                <TouchableOpacity style={styles.imageView} onPress={pickImage}>
                  <EditIcon size={scale(15)} />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.formView}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>UserName</Text>
              <TextInput
                placeholder='Enter UserName'
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput placeholder='Enter Name' style={styles.inputStyle} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Mobile Number</Text>
              <TextInput
                placeholder='Enter your mobile number'
                style={styles.inputStyle}
                inputMode='numeric'
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Description</Text>
              <TextInput
                placeholder='Enter Description'
                style={styles.inputDescStyle}
                multiline={true}
              />
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: font.bold,
    fontSize: scale(16),
    color: 'white',
  },
  buttonStyle: {
    width: moderateScale(130),
    height: moderateVerticalScale(45),
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
  },
  buttonView: {
    marginVertical: moderateVerticalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputDescStyle: {
    borderColor: colors.lightGray,
    backgroundColor: colors.lightgrey,
    padding: moderateScale(10),
    borderRadius: scale(10),
    height: moderateVerticalScale(90),
    fontFamily: font.semiBold,
    textAlignVertical: 'top',
  },
  inputLabel: {
    fontFamily: font.bold,
    fontSize: scale(14),
    color: colors.black,
  },
  inputContainer: {
    width: '100%',
    height: 'auto',
    marginVertical: moderateVerticalScale(10),
    flexDirection: 'column',
    gap: moderateVerticalScale(5),
  },
  inputStyle: {
    backgroundColor: colors.lightgrey,
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: scale(10),
    height: moderateVerticalScale(50),
    fontFamily: font.semiBold,
  },
  formView: {
    marginTop: moderateVerticalScale(20),
    width: '100%',
    paddingHorizontal: moderateScale(20),
  },
  mainContainer: {
    justifyContent: 'center',
    paddingVertical: moderateVerticalScale(30),
    backgroundColor: 'white',
    height: '100%',
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
    width: scale(150),
    height: scale(150),
    objectFit: 'fill',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 1,
  },
  imageView: {
    backgroundColor: 'white',
    borderRadius: scale(30),
    padding: scale(3),
  },
  profileImgViewContainer: {
    width: scale(150),
    height: scale(150),
    borderRadius: scale(80),
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 2,
  },
  profileImgView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
  },
});
