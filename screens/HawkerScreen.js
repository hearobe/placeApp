import React, { useState } from "react";
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { SearchBar } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function HawkerScreen({ navigation }) {
	const [searchtext, setsearchtext] = useState("");

	return (
		<View style={styles.container}>
			<Text> Go to App.js to start editing your app. </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
