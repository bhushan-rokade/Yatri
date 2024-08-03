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
import CheckBox from '@react-native-community/checkbox';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Register() {
  const navigation = useNavigation();
  const [toggleOn, setToggleOn] = useState(false);

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
        <Text style={styles.headingText}>Registration</Text>
      </View>
      <View style={styles.formView}>
        <View style={styles.innerForm}>
          <FormInput
            height={moderateScale(40)}
            marginbottom={moderateVerticalScale(15)}
            borderBottomColorActive={colors.secondaryColor}
            borderBottomColor={colors.grey}
            borderBottomWidth={1}
            activeColor={colors.secondaryColor}
            securedTextEntry={true}
            placeholder={'Enter Your Name'}
            labelText={'Full Name'}
          />
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
          <View style={styles.agreeView}>
            <CheckBox
              value={toggleOn}
              onValueChange={() => {
                setToggleOn(!toggleOn);
              }}
            />
            <Text style={styles.agreeText}>
              I agree with the{' '}
              <Text
                style={styles.ruleLink}
                onPress={() => {
                  navigation.navigate(routes.RULESMODEL);
                }}>
                rules
              </Text>
            </Text>
          </View>

          <ButtonWithImage
            text={'Sign Up'}
            showImage={false}
            backgroundColor={colors.primaryColor}
            width={scale(255)}
            textColor={'white'}
            height={moderateScale(40)}
            buttonStyle={{
              marginTop: moderateScale(30),
            }}
            fontsize={scale(17)}
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
          Already have an account?{' '}
          <Text
            style={styles.innerRegisterText}
            onPress={() => {
              navigation.navigate(routes.LOGIN);
            }}>
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ruleLink: {
    color: colors.linkViolet,
    textDecorationLine: 'underline',
    textDecorationColor: colors.linkViolet,
    textDecorationStyle: 'solid',
  },
  agreeText: {
    fontFamily: font.normal,
    color: colors.grey,
  },
  agreeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(10),
  },
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
    marginTop: moderateVerticalScale(230),
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotTextView: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: scale(8),
    color: colors.linkViolet,
    fontFamily: font.medium,
  },
  textFieldView: {
    marginBottom: moderateVerticalScale(20),
  },
  innerForm: {
    backgroundColor: 'white',
    height: moderateScale(330),
    width: moderateScale(275),
    alignSelf: 'center',
  },
  formView: {
    height: moderateVerticalScale(370),
    backgroundColor: 'white',
    position: 'absolute',
    width: windowWidth / 1.1,
    top: moderateVerticalScale(120),
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
    marginTop: moderateVerticalScale(10),
    marginLeft: moderateScale(30),
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
