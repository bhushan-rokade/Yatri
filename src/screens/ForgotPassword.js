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
import React, { useState } from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { colors, font, routes } from '../utils/constants';
import LeftArrowIcon from '../icons/LeftArrow';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../componets/FormInput';
import ButtonWithImage from '../componets/ButtonWithImage';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primaryColor} />

      <View style={styles.container}>
        <Text style={styles.headingText}>Forgot Password</Text>
        <Text
          style={[
            styles.headingText,
            { fontSize: scale(10), marginTop: moderateVerticalScale(5) },
          ]}>
          Recover Your Account Password.
        </Text>
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
            securedTextEntry={false}
            placeholder={'Enter Your Email'}
            labelText={'Email'}
          />
          <ButtonWithImage
            text={'Submit'}
            showImage={false}
            backgroundColor={colors.primaryColor}
            width={scale(255)}
            textColor={'white'}
            height={moderateScale(40)}
            buttonStyle={{
              marginTop: moderateScale(25),
            }}
            fontsize={scale(17)}
            onPress={() => {
              Alert.alert('Sent', 'Otp Sent Successfully', [
                {
                  text: 'OK',
                  onPress: () => {
                    navigation.navigate(routes.ENTEROTP);
                  },
                },
              ]);
            }}
          />
        </View>
      </View>
      <View style={styles.container2}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: moderateVerticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotTextView: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: scale(10),
    color: colors.linkViolet,
    fontFamily: font.medium,
  },
  textFieldView: {
    marginBottom: moderateVerticalScale(20),
  },
  innerForm: {
    backgroundColor: 'white',
    height: moderateScale(170),
    width: moderateScale(275),
    marginTop: moderateVerticalScale(30),
    alignSelf: 'center',
  },
  formView: {
    height: moderateVerticalScale(190),
    backgroundColor: 'white',
    position: 'absolute',
    width: windowWidth / 1.1,
    top: moderateVerticalScale(210),
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
    paddingTop: moderateVerticalScale(40),
    width: windowWidth,
    display: 'flex',
    flexDirection: 'column',
    height: windowHeight / 2.5,
    backgroundColor: colors.primaryColor,
  },
  container2: {
    backgroundColor: colors.primaryColor,
    height: windowHeight / 1.5,
  },
});
