import * as React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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
import { attractions } from "../assets/attraction";

function WishlistScreen({ navigation }) {
  const [list, setlist] = React.useState(attractions);
  //   const customId = "custom-id-yes";
  //   const notify = ({ msg }) =>
  //     toast(msg, {
  //       position: "top-center",
  //       autoClose: 1500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: true,
  //       progress: 1,
  //       toastId: customId,
  //     });
  const renderWishlistedItem = ({ item }) =>
    item.wishlist ? (
      <TouchableOpacity onPress={() => {}}>
        <Card style={{ marginBottom: 10 }}>
          <Card.Content>
            <Title style={styles.item}>{item.name}</Title>
            <Paragraph>{item.shortDesc}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: item.imageUri }} />
          <Card.Actions>
            <Button
              onPress={() => {
                setlist((list_prev_state) => {
                  list_prev_state[item.index].wishlist =
                    !list_prev_state[item.index].wishlist;
                  return list_prev_state;
                }); // assync execution
                console.log(`${item.wishlist} ${item.index}`);
                // const msg =
                //   (item.wishlist ? "Added to" : "Removed from") + " wish list";
                // notify({ msg });
              }}
            >
              Remove from wish list
            </Button>
            <IconButton
              icon={item.wishlist ? "star" : "star-outline"}
              animated={true}
              color={"purple"} //if anal enough, this purple is not default iOS purple
              size={20}
              onPress={() => {}}
            />
          </Card.Actions>
        </Card>
      </TouchableOpacity>
    ) : undefined;

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
      <ScrollView>
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data={list}
          renderItem={renderWishlistedItem}
        />
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();
// history
export default function eventstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
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

// FOR FUTURE SEARCH ENGINE //

// seachFilter = (text) => {
//   const newData = data.filter((item) => {
//     const listitem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;

//     return listitem.indexOf(text.toLowerCase());
//   });
// };
