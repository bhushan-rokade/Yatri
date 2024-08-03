import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import GoogleIcon from '../icons/GoogleIcon';
import ButtonWithImage from '../componets/ButtonWithImage';
import { colors, font, routes } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Onboard() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primaryColor} />
      <View style={styles.container}>
        <Text style={styles.headingText}>Welcome To</Text>
        <Text style={styles.headingText2}>Yatri</Text>
        <View style={styles.buttonView}>
          <ButtonWithImage
            onPress={() => {}}
            text='Continue With Google'
            ImageComponent={GoogleIcon}
            showImage={true}
            backgroundColor='white'
            textColor={colors.secondaryColor}
            borderRadius={scale(20)}
            height={scale(40)}
            imageSize={scale(30)}
            width={windowWidth / 1.3}
            imageColor={colors.secondaryColor}
          />

          <ButtonWithImage
            onPress={() => {
              navigation.navigate(routes.REGISTER);
            }}
            text='Register With Email'
            showImage={false}
            backgroundColor='transparent'
            textColor='white'
            borderRadius={scale(20)}
            borderColor='white'
            borderWidth={1}
            height={scale(40)}
            width={windowWidth / 1.3}
          />
        </View>
        <View style={styles.signInTextView}>
          <Text style={styles.signInText}>
            Already have an account?{' '}
            <Text
              style={styles.signInText2}
              onPress={() => {
                navigation.push(routes.LOGIN);
              }}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signInTextView: {
    margin: scale(50),
    alignSelf: 'center',
  },
  signInText: {
    color: 'white',
    fontSize: scale(13),
    fontFamily: font.regular,
  },
  signInText2: {
    color: 'white',
    fontFamily: font.bold,
  },
  buttonView: {
    marginTop: moderateVerticalScale(60),
    gap: 20,
  },
  headingText: {
    fontSize: scale(40),
    marginTop: moderateVerticalScale(100),
    marginLeft: moderateScale(40),
    color: 'white',
    fontFamily: font.bold,
  },
  headingText2: {
    fontSize: scale(40),
    marginLeft: moderateScale(40),
    color: colors.secondaryColor,
    fontFamily: font.bold,
  },
  container: {
    width: windowWidth,
    display: 'flex',
    flexDirection: 'column',
    height: windowHeight,
    backgroundColor: colors.primaryColor,
  },
});
