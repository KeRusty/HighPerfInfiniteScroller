import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  body: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 4,
  },
  itemid: {
    fontSize: 14,
    color: colors.gray,
  },
});
