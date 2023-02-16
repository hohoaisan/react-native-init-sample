import { EScreenName } from '@/models/enums'
import { HomeScreen } from '@/screens'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const RootStack = createNativeStackNavigator()

export const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={EScreenName.HOME_SCREEN}>
        <RootStack.Screen
          name={EScreenName.HOME_SCREEN}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
