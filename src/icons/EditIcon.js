import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const EditIcon = ({ size = 24, color = '#000000', strokeWidth = 2 }) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      {/* Camera body */}
      <Path
        d='M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Camera lens */}
      <Circle
        cx='12'
        cy='14'
        r='3'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default EditIcon;
