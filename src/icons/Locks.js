import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const OpenLockIcon = ({ size = 24, color = '#000000' }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M7 10V7C7 4.23858 9.23858 2 12 2C14.0503 2 15.8124 3.2341 16.584 5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M3 10H21V22H3V10Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M12 14V18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export const ClosedLockIcon = ({ size = 24, color = '#000000' }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <Path
      d='M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16Z'
      fill={color}
    />
  </Svg>
);
