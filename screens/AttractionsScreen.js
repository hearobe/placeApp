import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationHelpersContext,
  StackActions,
} from "@react-navigation/native";
import { Avatar, Card, Title, Paragraph, IconButton } from "react-native-paper";
import Constants from "expo-constants";
import Pinball from "./pinballwizard";
import { wishlist } from "../assets/wishlist";
import WishlistScreen from "./WishlistScreen";
// import { toast } from "react-toastify";

import { FontAwesome } from "@expo/vector-icons";
import { locations } from "../assets/locations";
import HomeScreen from "./HomeScreen";
import { attractions } from "../assets/attraction";

// toast.configure();

function AttractionScreen({ navigation }) {
  const customId = "custom-id-yes";
  // const notify = ({ msg }) =>
  //   toast(msg, {
  //     position: "top-center",
  //     autoClose: 1500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: true,
  //     progress: 1,
  //     toastId: customId,
  //   });

  const [wishitem, setList] = useState(wishlist); // for adding into wishlist
  const [list, setlist] = React.useState(attractions);

  const renderListItem = ({ item }) => (
    <TouchableOpacity onPress={() => {}}>
      <Card style={{ marginBottom: 10 }}>
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>{item.shortDesc}</Paragraph>
        </Card.Content>

        <Card.Cover source={{ uri: item.imageUri }} />
        <Card.Actions>
          <IconButton
            icon={item.wishlist ? "star" : "star-outline"}
            animated={true}
            color={"purple"}
            size={20}
            onPress={() => {
              setlist((list_prev_state) => {
                list_prev_state[item.index].wishlist =
                  !list_prev_state[item.index].wishlist;
                return list_prev_state;
              }); // assync execution, problem to update list_prev_state

              console.log(`${item.wishlist} ${item.index}`); // for debugging.
              const msg =
                (item.wishlist ? "Added to" : "Removed from") + " wish list";
              notify({ msg });
            }}
          />
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("WishlistScreen");
        }}
        title="Your Wish List"
        style={styles.wishlist}
      />
      <ScrollView>
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data={list}
          renderItem={renderListItem}
        />
      </ScrollView>
    </View>
  );
}

const attractionStack = createStackNavigator();
const Stack = createStackNavigator();
// history

function Attractionfunc() {
  return (
    <attractionStack.Navigator mode="modal">
      <attractionStack.Screen
        name="Attractions"
        component={AttractionScreen}
        options={{ headerShown: false }}
      />
      <attractionStack.Screen name="Pinball Wizard" component={Pinball} />
    </attractionStack.Navigator>
  );
}

export default function attractionstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Attractions"
        component={Attractionfunc}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Pinball Wizard" component={Pinball} />
      <Stack.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
  //button onPress should go to the same screen with same name in stack
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  wishlist: {
    width: "20%",
    height: "20%",
    margin: 24,
  },
});

// FOR FUTURE SEARCH ENGINE //

// seachFilter = (text) => {
//   const newData = data.filter((item) => {
//     const listitem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;

//     return listitem.indexOf(text.toLowerCase());
//   });
// };
