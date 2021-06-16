import React, { useState } from "react";
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
	FlatList,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import {
	Avatar,
	Button,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import { locations } from "../assets/locations";
import { StackActions } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import { wishlist } from "../assets/wishlist";
import { wish } from "./HomeScreen";

const DATA = wishlist;

const Item = ({ item, onPress, backgroundColor, textColor }) => (
	<TouchableOpacity onPress={() => {}}>
		<Card style={{ flex: 1, marginBottom: 10 }}>
			<Card.Title title="" />
			<Card.Content>
				{/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
				<Title>{item.name}</Title>

				<Paragraph>{item.shortDesc}</Paragraph>
			</Card.Content>
			<Card.Cover source={{ uri: item.imageUri }} />
			<Card.Actions>
				{/* <Button>Cancel</Button> */}
				{/* <Button>Ok</Button> */}
				<IconButton
					icon={item.wishlisted ? "star" : "star-outline"}
					animated={true}
					color={"purple"} //if anal enough, this purple is not default iOS purple
					size={20}
					onPress={() => {
						// setWish(!locations[0].wishlisted);
						// locations[0].wishlisted = wish;
						// wishlist.push(locations[0]);
					}}
				/>
			</Card.Actions>
		</Card>
	</TouchableOpacity>
);

function WishlistScreen({ route, navigation }) {
	const [selectedId, setSelectedId] = useState(null);
	const reRender = route.render;
	console.log("here: " + route.render);

	const renderItem = ({ item }) => {
		const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
		const color = item.id === selectedId ? "white" : "black";

		return (
			<Item
				item={item}
				onPress={() => setSelectedId(item.id)}
				backgroundColor={{ backgroundColor }}
				textColor={{ color }}
			/>
		);
	};

	if (!wishlist || wishlist.length === 0) {
		console.log(wishlist);
		return (
			<View style={styles.container}>
				<Text>You have no wishlisted locations</Text>
			</View>
		);
	} else {
		return (
			<SafeAreaView style={styles.container}>
				<FlatList
					data={DATA}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					extraData={reRender}
				/>
			</SafeAreaView>
		);

		// return (
		// 	<View style={styles.container}>
		// 		<ScrollView>
		// 			<TouchableOpacity onPress={() => {}}>
		// 				<Card style={{ marginBottom: 10 }}>
		// 					<Card.Content>
		// 						{/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
		// 						<Title>{wishlist[0].name}</Title>

		// 						<Paragraph>{wishlist[0].shortDesc}</Paragraph>
		// 					</Card.Content>
		// 					<Card.Cover source={{ uri: wishlist[0].imageUri }} />
		// 					<Card.Actions>
		// 						{/* <Button>Cancel</Button> */}
		// 						{/* <Button>Ok</Button> */}
		// 						<IconButton
		// 							icon={wishlist[0].wishlisted ? "star" : "star-outline"}
		// 							animated={true}
		// 							color={"purple"} //if anal enough, this purple is not default iOS purple
		// 							size={20}
		// 							onPress={() => {}}
		// 						/>
		// 					</Card.Actions>
		// 				</Card>
		// 			</TouchableOpacity>
		// 		</ScrollView>
		// 	</View>
		// );
	}
}

// function EventsSecondScreen({ navigation }) {
// 	return (
// 		<View
// 			style={{
// 				flex: 1,
// 				justifyContent: "center",
// 				alignItems: "center",
// 				backgroundColor: "lightpink",
// 			}}
// 		>
// 			<Text>Events!</Text>
// 			<Button
// 				title="3rd"
// 				onPress={() => navigation.dispatch(StackActions.popToTop())}
// 			/>
// 		</View>
// 	);
// }

const Stack = createStackNavigator();
// history
export default function eventstack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Wishlist" component={WishlistScreen} />
			{/* <Stack.Screen name="Events2" component={EventsSecondScreen} /> */}
		</Stack.Navigator>
	);
	//button onPress should go to the same screen with same name in stack
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: "rgb(225, 232, 238)",
		justifyContent: "center",
		alignItems: "center",
	},
});
