import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// styles
import {styles} from './styles';

interface AppHeaderProps {
  routeName?: string;
  isBackVisible?: boolean;
  isTitleVisible?: boolean;
  title?: string;
  isRightTextVisible?: boolean;
  rightText?: string;
  showNoColor?: boolean;
}

function AppHeader({routeName, title, showNoColor}: AppHeaderProps) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.appHeaderContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title ?? routeName}</Text>
      </View>
    </SafeAreaView>
  );
}

export default AppHeader;
