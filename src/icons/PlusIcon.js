import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlusIcon = ({ size = 24, color = '#000000', strokeWidth = 2 }) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 5V19M5 12H19'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default PlusIcon;
