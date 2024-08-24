import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsIcon = ({ size = 24, color = '#000000' }) => {
  return <Icon name='settings-outline' size={size} color={color} />;
};

export default SettingsIcon;
