import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  appHeaderContainer: {
    backgroundColor: colors.black,
    height: 100,
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  titleText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
});
