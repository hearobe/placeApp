// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';

//import SearchableDropdown component
import SearchableDropdown from 'react-native-searchable-dropdown';
import { locations } from "../assets/locations";
import { SearchBar } from "react-native-elements";



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

const App = () => {

	const [searchtext, setsearchtext] = useState("");
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
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.headingText}>
                Search something
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <SearchBar
                        onChangeText={(searchtext) => {
                            setsearchtext(searchtext);
                        }}
                        onSubmitEditing={(event) => {
                            setsearchtext(event.nativeEvent.text);
                            searchFunction(searchtext);
                        }}
                        value={searchtext}
                        onClear={() => {
                            setsearchtext("");
                        }}
                        placeholder="where would you like to go?"
                        lightTheme
                        containerStyle={{ width: "85%" }}
                    />
                </View>
            </View>
            <FlatList
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={searched}
            />
        </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
});

