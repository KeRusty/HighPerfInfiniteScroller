import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  loader: {
    marginVertical: 16,
    alignSelf: 'center',
  },
});
