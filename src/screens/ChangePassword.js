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
  Image,
} from 'react-native';
import { colors, font, routes } from '../utils/constants';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import LeftArrowIcon from '../icons/LeftArrow';
import EyeIcon from '../icons/EyeIcon';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function ChangePassword() {
  const [secure1, setsecure1] = useState(true);
  const [secure2, setsecure2] = useState(true);
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: 'white' }}>
        <View style={styles.container}>
          <View style={styles.headerView}>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <LeftArrowIcon size={scale(40)} color={'black'} />
            </TouchableOpacity>
            <View style={styles.headingtextContainer}>
              <Text style={styles.headingText}>Change Password</Text>
            </View>
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.noteText}>
              The new password must be different from the current password
            </Text>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Password</Text>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={secure1}
                  placeholder={'Enter Password'}
                />
                <EyeIcon
                  isOpen={!secure1}
                  onPress={() => setsecure1(!secure1)}
                />
              </View>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Confirm Password</Text>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={secure2}
                  placeholder={'Confirm Password'}
                />
                <EyeIcon
                  isOpen={!secure2}
                  onPress={() => setsecure2(!secure2)}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  submitText: {
    fontFamily: font.bold,
    fontSize: scale(14),
    color: 'white',
  },
  submitButton: {
    backgroundColor: colors.primaryColor,
    marginHorizontal: moderateScale(70),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(30),
    height: moderateVerticalScale(40),
    borderRadius: scale(20),
  },
  textInputView: {
    backgroundColor: colors.lightgrey,
    height: moderateVerticalScale(45),
    marginTop: moderateVerticalScale(6),
    borderRadius: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: moderateVerticalScale(45),
    paddingHorizontal: moderateScale(20),
    fontSize: moderateScale(13),
    fontFamily: font.semiBold,
    flex: 0.9,
  },
  inputText: {
    fontFamily: font.semiBold,
    color: colors.grey,
    fontSize: scale(12),
  },
  inputView: {
    marginTop: moderateVerticalScale(20),
  },
  noteText: {
    fontFamily: font.normal,
    fontSize: scale(15),
  },
  mainContainer: {
    marginTop: moderateVerticalScale(40),
    marginHorizontal: moderateScale(15),
  },
  headingtextContainer: {
    flex: 1,
    marginLeft: moderateScale(60),
  },
  headingText: {
    fontFamily: font.bold,
    fontSize: scale(17),
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: moderateVerticalScale(50),
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
