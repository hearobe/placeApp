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
import { hawkerchoices } from "../assets/hawker";
import { AntDesign } from "@expo/vector-icons";
import { wishlist } from "../assets/wishlist";
import Fan from "./fan";
// import fan from "./hawkers/fan"
// import fan from "./hawkers/fan"

function HawkerScreen({ navigation }) {
  const [searchtext, setsearchtext] = useState("");
  const [wish, setWish] = useState("false");
  const searchResults = [];

  const searchFunction = (searchtext) => {
    //	for (locale in hawkerchoices) {
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
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("Liao Fan Hawker Chan")
          }}
        >
          <Card style={{ marginBottom: 10 }}>
            <Card.Content>
              {/* <Rating fractions="{1}" startingValue="{3.3}" readonly /> */}
              <Title>{hawkerchoices[0].name}</Title>

              <Paragraph>{hawkerchoices[0].shortDesc}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: hawkerchoices[0].imageUri }} />
            <Card.Actions>
              {/* <Button>Cancel</Button> */}
              {/* <Button>Ok</Button> */}
              <IconButton
                icon={hawkerchoices[0].wishlist ? "star" : "star-outline"}
                animated={true}
                color={"purple"} //if anal enough, this purple is not default iOS purple
                size={20}
                onPress={() => {
                  setWish(!hawkerchoices[0].wishlisted);
                  hawkerchoices[0].wishlisted = wish;
                  wishlist.push(hawkerchoices[0]);
                }}
              />
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Card style={{ marginBottom: 10 }}>
            <Card.Content>
              <Title>{hawkerchoices[1].name}</Title>
              <Paragraph>{hawkerchoices[1].shortDesc}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: hawkerchoices[1].imageUri }} />
            <Card.Actions>
              <IconButton
                icon={hawkerchoices[1].wishlist ? "star" : "star-outline"}
                animated={true}
                color={"purple"}
                size={20}
                onPress={() => {
                  setWish(!hawkerchoices[1].wishlisted);
                  hawkerchoices[1].wishlisted = wish;
                  wishlist.push(hawkerchoices[1]);
                  //TODO: use useEffect to check and re-render star button
                }}
              />
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Card style={{ marginBottom: 10 }}>
            <Card.Content>
              <Title>{hawkerchoices[2].name}</Title>
              <Paragraph>{hawkerchoices[2].shortDesc}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: hawkerchoices[2].imageUri }} />
            <Card.Actions>
              <IconButton
                icon={hawkerchoices[2].wishlist ? "star" : "star-outline"}
                animated={true}
                color={"purple"}
                size={20}
                onPress={() => {
                  setWish(!hawkerchoices[2].wishlisted);
                  hawkerchoices[2].wishlisted = wish;
                  wishlist.push(hawkerchoices[2]);
                  //TODO: use useEffect to check and re-render star button
                }}
              />
            </Card.Actions>
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

export default function homestack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HawkerScreen} />
      <Stack.Screen name="Liao Fan Hawker Chan" component={Fan} />
      "Liao Fan Hawker Chan"
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "rgb(225, 232, 238)",
  },
});
