import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import MoviesScreen from '../screens/movies/MoviesScreen';

export type RootStackParams = {
    Home: undefined;
    Details: {movieId: number};
}


const Stack = createStackNavigator<RootStackParams>();

export function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={MoviesScreen} />
    </Stack.Navigator>
  );
}