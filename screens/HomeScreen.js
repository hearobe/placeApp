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
import { FontAwesome } from "@expo/vector-icons";
import {
	Avatar,
	Button,
	Card,
	Title,
	Paragraph,
	IconButton,
} from "react-native-paper";
import { SearchBar } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-ratings";
import { locations } from "../assets/locations";
import { AntDesign } from "@expo/vector-icons";
import { wishlist } from "../assets/wishlist";

// import Cards from './components/cards.js'

function HomeScreen() {
	const [searchtext, setsearchtext] = useState("");
	const [wish, setWish] = useState("false");
	const searchResults = [];

	const searchFunction = (searchtext) => {
		console.log("searchFunction");
		for (locale of locations) {
			if (locale.name.tolower() === searchtext.tolower()) {
				console.log(locale.name);
				searchResults.push(locale);
			}
		}
	};

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row", justifyContent: "center" }}>
				<SearchBar
					onChangeText={(searchtext) => {
						setsearchtext(searchtext);
						searchFunction(searchtext);
					}}
					onClearText={() => {
						setsearchtext("");
						searchFunction("");
					}}
					placeholder="where would you like to go?"
					lightTheme
					containerStyle={{ width: "85%" }}
				/>
				<TouchableOpacity>
					<FontAwesome
						name="heart-o"
						size={30}
						color="black"
						style={{ marginTop: 20 }}
					/>
				</TouchableOpacity>
			</View>
			<ScrollView>
				<TouchableOpacity onPress={() => {}}>
					<Card style={{ marginBottom: 10 }}>
						<Card.Title title="Attraction of the Day" />
						<Card.Content>
							{/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
							<Title>{locations[0].name}</Title>

							<Paragraph>{locations[0].shortDesc}</Paragraph>
						</Card.Content>
						<Card.Cover source={{ uri: locations[0].imageUri }} />
						<Card.Actions>
							{/* <Button>Cancel</Button> */}
							{/* <Button>Ok</Button> */}
							<IconButton
								icon={locations[0].wishlist ? "star" : "star-outline"}
								animated={true}
								color={"purple"} //if anal enough, this purple is not default iOS purple
								size={20}
								onPress={() => {
									setWish(!locations[0].wishlisted);
									locations[0].wishlisted = wish;
									wishlist.push(locations[0]);
								}}
							/>
						</Card.Actions>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {}}>
					<Card style={{ marginBottom: 10 }}>
						<Card.Title title="Food of the Day" />
						<Card.Content>
							<Title>Singapore Flyer</Title>
							<Paragraph>Card content</Paragraph>
						</Card.Content>
						<Card.Cover source={{ uri: "https://picsum.photos/700" }} />
						<Card.Actions>
							<Button>Cancel</Button>
							<Button>Ok</Button>
						</Card.Actions>
					</Card>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {}}>
					<Card style={{ marginBottom: 10 }}>
						<Card.Title title="Hawker Food" />
						<Card.Content>
							<Title>{locations[1].name}</Title>
							<Paragraph>{locations[1].shortDesc}</Paragraph>
						</Card.Content>
						<Card.Cover source={{ uri: locations[1].imageUri }} />
						<Card.Actions>
							<IconButton
								icon={locations[1].wishlist ? "star" : "star-outline"}
								animated={true}
								color={"purple"}
								size={20}
								onPress={() => {
									setWish(!locations[1].wishlisted);
									locations[1].wishlisted = wish;
									wishlist.push(locations[1]);
								}}
							/>
						</Card.Actions>
					</Card>
				</TouchableOpacity>
			</ScrollView>
		</View>

		//   <View style={styles.container}>
		//     <View style={{ flex:1 , flexDirection:'row', justifyContent:"space-evenly"}}>
		//       <TextInput
		//         style={styles.textInput}
		//         placeholder="Search for places to go">
		//       </TextInput>
		//       <FontAwesome name="heart-o" size={24} color="black" style={{marginTop:40}}/>
		//     </View>
		//     <Card>
		//   <Card.Title title="Tourist Attraction" subtitle="Marina Bay" />
		//   <Card.Content>
		//     <Title>Singapore Flyer</Title>
		//     <Paragraph>Card content</Paragraph>
		//   </Card.Content>
		//   <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
		//   <Card.Actions>
		//     <Button>Cancel</Button>
		//     <Button>Ok</Button>
		//   </Card.Actions>
		// </Card>

		//   </View>
	);
}

const Stack = createStackNavigator();

export default function homestack() {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	textInput: {
		borderColor: "black",
		borderWidth: 0.5,
		padding: 5,
		backgroundColor: "lightyellow",
		width: "80%",
		marginTop: 40,
		height: 30,
	},
	container: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: "rgb(225, 232, 238)",
	},
	image: {
		width: "100%",
		height: "30%",
	},
});
