import * as React from "react";
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
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

function WishlistScreen({ navigation }) {
	if (!wishlist || wishlist === []) {
		console.log(wishlist);
		return (
			<View>
				<Text>You have no wishlisted locations</Text>
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<ScrollView>
					<TouchableOpacity onPress={() => {}}>
						<Card style={{ marginBottom: 10 }}>
							<Card.Content>
								{/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
								<Title>{wishlist[0].name}</Title>

								<Paragraph>{wishlist[0].shortDesc}</Paragraph>
							</Card.Content>
							<Card.Cover source={{ uri: wishlist[0].imageUri }} />
							<Card.Actions>
								{/* <Button>Cancel</Button> */}
								{/* <Button>Ok</Button> */}
								<IconButton
									icon={wishlist[0].wishlist ? "star" : "star-outline"}
									animated={true}
									color={"purple"} //if anal enough, this purple is not default iOS purple
									size={20}
									onPress={() => {}}
								/>
							</Card.Actions>
						</Card>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
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
			<Stack.Screen name="Events" component={WishlistScreen} />
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
	},
});
