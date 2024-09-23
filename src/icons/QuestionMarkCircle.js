import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const QuestionMarkCircleIcon = ({ size = 24, color = '#000000' }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Circle
      cx='12'
      cy='12'
      r='10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M9 9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9C15 10.1046 14.1046 11 13 11H12V13'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Circle cx='12' cy='16' r='1' fill={color} />
  </Svg>
);

export default QuestionMarkCircleIcon;
