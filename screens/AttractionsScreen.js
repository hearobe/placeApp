import * as React from "react";
import { Button, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";

function EventsScreen({ navigation }) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "lightpink",
			}}
		>
			<Text>Events!</Text>
			<Button
				title="YOU ARE A WINNER"
				onPress={() => navigation.navigate("Events2")}
			/>
		</View>
	);
}
//what are u passing into the navigation

function EventsSecondScreen({ navigation }) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "lightpink",
			}}
		>
			<Text>Events!</Text>
			<Button
				title="3rd"
				onPress={() => navigation.dispatch(StackActions.popToTop())}
			/>
		</View>
	);
}

const Stack = createStackNavigator();
// history
export default function eventstack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Events" component={EventsScreen} />
			<Stack.Screen name="Events2" component={EventsSecondScreen} />
		</Stack.Navigator>
	);
	//button onPress should go to the same screen with same name in stack
}
