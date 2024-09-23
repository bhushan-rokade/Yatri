import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../src/screens/Onboard';
import { NavigationContainer } from '@react-navigation/native';
import { routes } from '../src/utils/constants';
import Login from '../src/screens/Login';
import Register from '../src/screens/Register';
import RulesModal from '../src/screens/Modals/RulesModal';
import Home from '../src/screens/Home';
import Profile from '../src/screens/Profile';
import MyTrips from '../src/screens/MyTrips';
import Liked from '../src/screens/Liked';
import ForgotPassword from '../src/screens/ForgotPassword';
import EnterOtp from '../src/screens/EnterOtp';
import ChangePassword from '../src/screens/ChangePassword';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.ONBOARD}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={routes.ONBOARD}
          component={Onboard}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            animationType: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name={routes.LOGIN}
          component={Login}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'pop',
            presentation: 'transparentModal',
            animationType: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name={routes.FORGOTPASSWORD}
          component={ForgotPassword}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'pop',
            presentation: 'screen',
            animationType: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name={routes.ENTEROTP}
          component={EnterOtp}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'pop',
            presentation: 'screen',
            animationType: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name={routes.REGISTER}
          component={Register}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'modal',
            animationType: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name={routes.RULESMODEL}
          component={RulesModal}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'modal',
            animationType: 'slide_from_right',
            headerShown: true,
            headerTitle: 'Back',
          }}
        />
        <Stack.Screen
          name={routes.HOME}
          component={Home}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'screen',
          }}
        />
        <Stack.Screen
          name={routes.CHANGEPASSWORD}
          component={ChangePassword}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'screen',
          }}
        />
        <Stack.Screen
          name={routes.PROFILE}
          component={Profile}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'screen',
          }}
        />
        <Stack.Screen
          name={routes.MYTRIPS}
          component={MyTrips}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'screen',
          }}
        />
        <Stack.Screen
          name={routes.LIKED}
          component={Liked}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'screen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
