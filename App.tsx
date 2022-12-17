import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverview from "./screens/MealOverview";
import MealDetails from "./screens/MealDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourites from "./screens/Favourites";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

type RootStackParamList = {
  MealCategories: undefined;
  MealOverview: { categoryID: string };
  MealDetails: { mealID: string };
  DrawerScreen: undefined;
  Favourites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="MealCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealOverview" component={MealOverview} />
            <Stack.Screen
              name="MealDetails"
              component={MealDetails}
              options={{
                title: "About The Meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
