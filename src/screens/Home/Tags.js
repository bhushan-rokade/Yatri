import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors, font } from '../../utils/constants';
import {
  moderateScale,
  scale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export default function Tags({ data }) {
  const [selectedTag, setSelectedTag] = useState(null);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.tagsView}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              style={selectedTag == index ? styles.selectedTag : styles.tag}
              key={index}
              onPress={() => {
                setSelectedTag(index);
              }}>
              <Text
                style={{
                  color: selectedTag == index ? 'white' : 'grey',
                  fontFamily: font.medium,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  selectedTag: {
    backgroundColor: colors.primaryColor,
    height: scale(30),
    width: scale(75),
    justifyContent: 'center',
    borderRadius: scale(10),
    alignItems: 'center',
  },
  tag: {
    height: scale(30),
    width: scale(75),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: scale(10),
    alignItems: 'center',
  },
  tagsView: {
    marginTop: moderateVerticalScale(20),
    gap: scale(15),
    flexDirection: 'row',
    paddingHorizontal: scale(10),
  },
});
