import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="Notifications" component={Screen2} />
        </Stack.Navigator>
    );
}

export default Navigation;