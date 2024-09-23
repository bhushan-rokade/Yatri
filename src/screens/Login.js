import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { colors, font, routes } from '../utils/constants';
import LeftArrowIcon from '../icons/LeftArrow';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import GoogleIcon from '../icons/GoogleIcon';
import FormInput from '../componets/FormInput';
import ButtonWithImage from '../componets/ButtonWithImage';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Login() {
  const navigation = useNavigation();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primaryColor} />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.leftArrow}
          onPress={() => {
            navigation.pop();
          }}>
          <LeftArrowIcon size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.headingText}>Sign In</Text>
      </View>
      <View style={styles.formView}>
        <View style={styles.innerForm}>
          <FormInput
            height={moderateScale(40)}
            marginbottom={moderateVerticalScale(15)}
            inputMode={'email'}
            keyboardType={'email'}
            borderBottomColorActive={colors.secondaryColor}
            borderBottomColor={colors.grey}
            borderBottomWidth={1}
            activeColor={colors.secondaryColor}
            securedTextEntry={true}
            placeholder={'Enter Your Email'}
            labelText={'Email'}
          />
          <FormInput
            height={moderateScale(40)}
            marginbottom={moderateVerticalScale(15)}
            borderBottomColorActive={colors.secondaryColor}
            borderBottomColor={colors.grey}
            borderBottomWidth={1}
            activeColor={colors.secondaryColor}
            securedTextEntry={true}
            placeholder={'Enter Password'}
            labelText={'Password'}
          />
          <TouchableOpacity style={styles.forgotTextView}>
            <Text
              style={styles.forgotText}
              onPress={() => {
                navigation.navigate(routes.FORGOTPASSWORD);
              }}>
              Do not remember the password?
            </Text>
          </TouchableOpacity>
          <ButtonWithImage
            text={'SignIn'}
            showImage={false}
            backgroundColor={colors.primaryColor}
            width={scale(255)}
            textColor={'white'}
            height={moderateScale(40)}
            buttonStyle={{
              marginTop: moderateScale(40),
            }}
            fontsize={scale(17)}
            onPress={() => {
              navigation.navigate(routes.HOME);
            }}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.buttonContainer}>
          <Text>or continue with</Text>
          <TouchableOpacity style={styles.googleBtn}>
            <GoogleIcon width={scale(23)} height={scale(23)} color={'white'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.registerText}>
          Don't have account yet?{' '}
          <Text
            style={styles.innerRegisterText}
            onPress={() => {
              navigation.navigate(routes.REGISTER);
            }}>
            Registration
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  registerText: {
    marginTop: moderateVerticalScale(80),
    alignSelf: 'center',
    fontFamily: font.semiBold,
  },
  innerRegisterText: {
    fontFamily: font.bold,
    color: colors.secondaryColor,
  },
  googleBtn: {
    marginTop: moderateVerticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(45),
    height: scale(45),
    borderRadius: 30,
    backgroundColor: 'red',
    elevation: 2,
  },
  buttonContainer: {
    marginTop: moderateVerticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: 'white',
    fontFamily: font.semiBold,
    fontSize: scale(14),
  },
  signInBtn: {
    alignSelf: 'center',
    marginTop: moderateVerticalScale(35),
    height: moderateScale(40),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(255),
    backgroundColor: colors.primaryColor,
  },
  forgotTextView: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: scale(10),
    color: colors.linkViolet,
    fontFamily: font.medium,
  },
  textInput: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    height: moderateScale(40),
  },
  textFieldText: {
    color: colors.grey,
    fontSize: scale(11),
    fontFamily: font.normal,
  },
  textFieldView: {
    marginBottom: moderateVerticalScale(20),
  },
  innerForm: {
    backgroundColor: 'white',
    height: moderateScale(240),
    width: moderateScale(275),
    alignSelf: 'center',
  },
  formView: {
    height: moderateVerticalScale(280),
    backgroundColor: 'white',
    position: 'absolute',
    width: windowWidth / 1.1,
    top: moderateVerticalScale(160),
    alignSelf: 'center',
    borderRadius: 25,
    zIndex: 3,
    elevation: 2,
    justifyContent: 'center',
  },
  leftArrow: {
    marginTop: moderateVerticalScale(20),
    marginLeft: scale(10),
  },
  headingText: {
    fontSize: scale(30),
    marginTop: moderateVerticalScale(30),
    marginLeft: moderateScale(40),
    color: 'white',
    fontFamily: font.bold,
  },
  container: {
    width: windowWidth,
    display: 'flex',
    flexDirection: 'column',
    height: windowHeight / 2.5,
    backgroundColor: colors.primaryColor,
  },
  container2: {
    backgroundColor: 'white',
    height: windowHeight / 1.5,
  },
});
