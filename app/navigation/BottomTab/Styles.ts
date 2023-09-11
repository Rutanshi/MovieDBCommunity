import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {horizontalScale, verticalScale, moderateScale} = Metrics;

export default StyleSheet.create({
  tabOption: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizontalScale(-10),
  },
  tabImage: {
    height: verticalScale(20),
    width: horizontalScale(20),
    resizeMode: 'contain',
  },
  tabLabel: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(8),
  },
});
