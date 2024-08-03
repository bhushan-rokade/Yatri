import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { moderateVerticalScale, scale } from 'react-native-size-matters';

export default function RulesModal() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.rulesText}>Rules</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rulesText: {
    alignSelf: 'center',
    fontSize: scale(20),
  },
  mainView: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});
