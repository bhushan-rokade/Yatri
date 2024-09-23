import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import React, { useState, useRef } from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { colors, font, routes } from '../utils/constants';
import LeftArrowIcon from '../icons/LeftArrow';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ButtonWithImage from '../componets/ButtonWithImage';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function EnterOtp() {
  const navigation = useNavigation();
  const [otp1Focused, setotp1Focused] = useState(false);
  const [otp2Focused, setotp2Focused] = useState(false);
  const [otp3Focused, setotp3Focused] = useState(false);
  const [otp4Focused, setotp4Focused] = useState(false);
  const otp1ref = useRef();
  const otp2ref = useRef();
  const otp3ref = useRef();
  const otp4ref = useRef();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primaryColor} />

      <View style={styles.container}>
        <View style={styles.formView}>
          <Text style={styles.headingText}>Enter Otp</Text>
          <View style={styles.otpView}>
            <TextInput
              onFocus={() => setotp1Focused(true)}
              onBlur={() => setotp1Focused(false)}
              keyboardType='numeric'
              inputmode='numeric'
              ref={otp1ref}
              style={otp1Focused ? styles.otpInputActive : styles.otpInput}
              maxLength={1}
              onChangeText={(text) => {
                if (text.length == 1) otp2ref.current.focus();
              }}
            />
            <TextInput
              onFocus={() => setotp2Focused(true)}
              onBlur={() => setotp2Focused(false)}
              keyboardType='numeric'
              inputmode='numeric'
              style={otp2Focused ? styles.otpInputActive : styles.otpInput}
              maxLength={1}
              ref={otp2ref}
              onChangeText={(text) => {
                if (text.length == 1) otp3ref.current.focus();
                else otp1ref.current.focus();
              }}
            />
            <TextInput
              onFocus={() => setotp3Focused(true)}
              onBlur={() => setotp3Focused(false)}
              keyboardType='numeric'
              inputmode='numeric'
              style={otp3Focused ? styles.otpInputActive : styles.otpInput}
              maxLength={1}
              ref={otp3ref}
              onChangeText={(text) => {
                if (text.length == 1) otp4ref.current.focus();
                else otp2ref.current.focus();
              }}
            />
            <TextInput
              onFocus={() => setotp4Focused(true)}
              onBlur={() => setotp4Focused(false)}
              keyboardType='numeric'
              inputmode='numeric'
              maxLength={1}
              ref={otp4ref}
              style={otp4Focused ? styles.otpInputActive : styles.otpInput}
              onChangeText={(text) => {
                if (text.length < 1) otp3ref.current.focus();
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.btnView}
            onPress={() => navigation.navigate(routes.CHANGEPASSWORD)}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  otpInputActive: {
    backgroundColor: 'white',
    width: moderateVerticalScale(55),
    height: moderateVerticalScale(55),
    borderWidth: scale(3),
    borderColor: 'skyblue',
    borderRadius: scale(15),
    textAlign: 'center',
    fontFamily: font.bold,
    fontSize: scale(15),
  },
  buttonText: {
    fontSize: scale(15),
    fontFamily: font.bold,
  },
  btnView: {
    alignSelf: 'center',
    marginTop: moderateVerticalScale(40),
    backgroundColor: 'white',
    width: moderateScale(220),
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateVerticalScale(45),
    borderRadius: scale(15),
  },
  otpInput: {
    backgroundColor: 'white',
    width: moderateVerticalScale(55),
    height: moderateVerticalScale(55),
    borderRadius: scale(15),
    textAlign: 'center',
    fontFamily: font.bold,
    fontSize: scale(15),
  },
  otpView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: moderateVerticalScale(20),
  },
  formView: {
    height: moderateVerticalScale(190),
    position: 'absolute',
    width: windowWidth / 1.1,
    top: moderateVerticalScale(200),
    alignSelf: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },
  leftArrow: {
    marginTop: moderateVerticalScale(20),
    marginLeft: scale(10),
  },
  headingText: {
    fontSize: scale(30),
    marginTop: moderateVerticalScale(20),
    marginLeft: moderateScale(15),
    color: 'white',
    fontFamily: font.bold,
  },
  container: {
    paddingTop: moderateVerticalScale(40),
    width: windowWidth,
    display: 'flex',
    flexDirection: 'column',
    height: windowHeight * 1.25,
    backgroundColor: colors.primaryColor,
  },
});
