import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components
import {AppHeader} from '../components';

// Routes
import HomeScreen from '../screens/home/Home';

const Stack = createNativeStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => {
            return <AppHeader title={'Infinite Post List'} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
