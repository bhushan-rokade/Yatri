import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import GoogleIcon from '../icons/GoogleIcon';
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
          <TouchableOpacity style={styles.btnGoogle}>
            <GoogleIcon width={scale(30)} height={scale(30)} color='#4285F4' />

            <Text style={styles.googleText}>Continue With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEmail}>
            <Text style={styles.emailText}>Register With Email</Text>
          </TouchableOpacity>
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
  googleText: {
    color: colors.secondaryColor,
    fontSize: scale(13),
    marginLeft: moderateScale(12),
    fontFamily: font.semiBold,
  },
  btnGoogle: {
    width: moderateScale(290),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: scale(40),
    borderRadius: scale(20),
    flexDirection: 'row',
  },
  btnEmail: {
    width: moderateScale(290),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: scale(40),
    marginTop: moderateVerticalScale(30),
    borderRadius: scale(20),
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
  },
  emailText: {
    color: 'white',
    fontSize: scale(13),
    fontFamily: font.semiBold,
  },
  buttonView: {
    marginTop: moderateVerticalScale(60),
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
