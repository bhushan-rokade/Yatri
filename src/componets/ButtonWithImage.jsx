import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import GoogleIcon from '../icons/GoogleIcon';
import { colors, font } from '../utils/constants';

const ButtonWithImage = ({
  onPress,
  text,
  ImageComponent,
  showImage = true,
  backgroundColor = 'white',
  textColor = 'black',
  borderRadius = scale(20),
  borderColor,
  borderWidth,
  height,
  imageSize,
  imageColor,
  width,
  buttonStyle,
  fontsize,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          borderRadius,
          borderColor,
          borderWidth,
          height,
          width,
        },
        buttonStyle,
      ]}
      onPress={onPress}>
      {showImage ? (
        <ImageComponent
          height={imageSize}
          width={imageSize}
          color={imageColor}
        />
      ) : (
        ''
      )}
      <Text
        style={[styles.buttonText, { color: textColor, fontsize: fontsize }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: colors.secondaryColor,
    fontSize: scale(13),
    marginLeft: moderateScale(12),
    fontFamily: font.semiBold,
  },
  button: {
    width: moderateScale(290),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: scale(20),
    flexDirection: 'row',
  },
});

export default ButtonWithImage;
