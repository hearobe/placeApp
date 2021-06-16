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
import { restaurants } from "../assets/restaurant";
import { AntDesign } from "@expo/vector-icons";
import { wishlist } from "../assets/wishlist";

function RestaurantScreen() {
  const [searchtext, setsearchtext] = useState("");
  const [wish, setWish] = useState("false");
  const searchResults = [];

  const searchFunction = (searchtext) => {
    //	for (locale in restaurants) {
    //	if (locale.name.tolower() === searchtext.tolower()) {
    //		searchResults.push(locale);
    //	}
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <SearchBar
          onChangeText={(searchtext) => searchFunction(searchtext)}
          onClearText={(searchtext) => searchFunction("")}
          placeholder="where would you like to eat?"
          lightTheme
          containerStyle={{ width: "85%" }}
        />
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => {}}>
          <Card style={{ marginBottom: 10 }}>
            <Card.Content>
              {/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
              <Title>{restaurants[0].name}</Title>

              <Paragraph>{restaurants[0].shortDesc}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: restaurants[0].imageUri }} />
            <Card.Actions>
              {/* <Button>Cancel</Button> */}
              {/* <Button>Ok</Button> */}
              <IconButton
                icon={restaurants[0].wishlist ? "star" : "star-outline"}
                animated={true}
                color={"purple"} //if anal enough, this purple is not default iOS purple
                size={20}
                onPress={() => {
                  setWish(!restaurants[0].wishlisted);
                  restaurants[0].wishlisted = wish;
                  wishlist.push(restaurants[0]);
                }}
              />
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Card style={{ marginBottom: 10 }}>
            <Card.Content>
              <Title>{restaurants[1].name}</Title>
              <Paragraph>{restaurants[1].shortDesc}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: restaurants[1].imageUri }} />
            <Card.Actions>
              <IconButton
                icon={restaurants[1].wishlist ? "star" : "star-outline"}
                animated={true}
                color={"purple"}
                size={20}
                onPress={() => {
                  setWish(!restaurants[1].wishlisted);
                  restaurants[1].wishlisted = wish;
                  wishlist.push(restaurants[1]);
                  //TODO: use useEffect to check and re-render star button
                }}
              />
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Card style={{ marginBottom: 10 }}>
            <Card.Content>
              <Title>{restaurants[2].name}</Title>
              <Paragraph>{restaurants[2].shortDesc}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: restaurants[2].imageUri }} />
            <Card.Actions>
              <IconButton
                icon={restaurants[2].wishlist ? "star" : "star-outline"}
                animated={true}
                color={"purple"}
                size={20}
                onPress={() => {
                  setWish(!restaurants[2].wishlisted);
                  restaurants[2].wishlisted = wish;
                  wishlist.push(restaurants[2]);
                  //TODO: use useEffect to check and re-render star button
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
      <Stack.Screen name="Home" component={RestaurantScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  //textInput: {
  //	borderColor: "black",
  //	borderWidth: 0.5,
  //	padding: 5,
  //	backgroundColor: "lightyellow",
  //	width: "80%",
  //	marginTop: 40,
  //	height: 30,
  //},
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "rgb(225, 232, 238)",
  },
});
