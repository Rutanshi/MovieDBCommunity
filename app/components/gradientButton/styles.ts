import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

const {moderateScale, verticalScale} = Metrics;

export default StyleSheet.create({
  button: {
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(30),
    paddingVertical: verticalScale(10),
  },
});
