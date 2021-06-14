import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoodScreen from "./screens/FoodScreen";
import AttractionsScreen from "./screens/AttractionsScreen";
import HomeScreen from "./screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					// tabbarIcon is a function thus fixed value for color and size?
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						//Set the icon based on which route it is (name of the tab)
						if (route.name === "Home") {
							iconName = "home";
						} else if (route.name === "Attractions") {
							iconName = "local-attraction";
							return (
								<MaterialIcons name={iconName} size={size} color={color} />
							);
						} else if (route.name === "Food") iconName = "food-fork-drink";
						//ternary operator ? :-> if ():?

						// You can return any component that you like here!
						return (
							<MaterialCommunityIcons
								name={iconName}
								size={size}
								color={color}
							/>
						);
					},
				})}
				tabBarOptions={{
					activeTintColor: "orange",
					inactiveTintColor: "darkgrey",
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Attractions" component={AttractionsScreen} />
				<Tab.Screen name="Food" component={FoodScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
