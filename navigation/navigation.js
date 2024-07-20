import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../src/screens/Onboard';
import { NavigationContainer } from '@react-navigation/native';
import { routes } from '../src/utils/constants';
import Login from '../src/screens/Login';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.ONBOARD}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.ONBOARD} component={Onboard} />
        <Stack.Screen name={routes.LOGIN} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
