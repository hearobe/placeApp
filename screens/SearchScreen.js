// import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//import SearchableDropdown component
import SearchableDropdown from "react-native-searchable-dropdown";
import { locations } from "../assets/locations";
import { SearchBar } from "react-native-elements";
import pinballwizard from "./pinballwizard";

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
const NestedStack = createStackNavigator();

const App = ({ navigation }) => {
	const [searched, setSearched] = useState(true);
	const searchResults = [];
	// searched = false;

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

	const searchFunction = (searchtext) => {
		console.log(searchtext);
		if (!searchtext || searchtext === "") {
			console.log("1");
			setSearched(false);
			return;
		} else {
			for (locale of locations) {
				if (locale.name.toLowerCase().includes(searchtext.toLowerCase())) {
					console.log(locale.name);
					setSearched(true);
					console.log(searched);
					searchResults.push(locale);
					console.log("results" + searchResults);
				}
			}
			console.log("results" + searchResults);
		}
		// if (searchResults.length === 0) {
		// 	setSearched(false);
		// }
		console.log("searched: " + searched);
		console.log("type: " + typeof searched);
	};

	return (
		<NestedStack.Navigator>
			<NestedStack.Screen name="Search" component={Search} />
			<NestedStack.Screen name="Pinball" component={pinballwizard} />
		</NestedStack.Navigator>
	);
};

const Search = ({ navigation }) => {
	const [searchtext, setsearchtext] = useState("");

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<Text style={styles.headingText}>Search something</Text>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<SearchableDropdown
						onTextChange={(text) => console.log(text)}
						onItemSelect={() => navigation.navigate("Pinball")}
						containerStyle={{ width: "85%", padding: 5 }}
						textInputStyle={{
							padding: 12,
							borderWidth: 1,
							borderColor: "#ccc",
							backgroundColor: "#FAF7F6",
						}}
						itemStyle={{
							padding: 10,
							marginTop: 2,
							backgroundColor: "#FAF9F8",
							borderColor: "#bbb",
							borderWidth: 1,
						}}
						itemTextStyle={{
							color: "#222",
						}}
						itemsContainerStyle={{
							maxHeight: "60%",
						}}
						value={searchtext}
						onClear={() => {
							setsearchtext("");
						}}
						placeholder="where would you like to go?"
						lightTheme
						items={locations}
						defaultIndex={2}
						resetValue={false}
						underlineColorAndroid="transparent"
					/>
				</View>
			</View>
			{/* <FlatList
				data={searchResults}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				extraData={searched}
			/> */}
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 10,
	},
	titleText: {
		padding: 8,
		fontSize: 16,
		textAlign: "center",
		fontWeight: "bold",
	},
	headingText: {
		padding: 8,
	},
});
