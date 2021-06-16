import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HawkerScreen from "./HawkerScreen";
import RestaurantScreen from "./RestaurantScreen";

function FoodScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.hawkerButton}
        onPress={() => navigation.navigate("Hawker Centres")}
      >
        <Text style={styles.buttonText}> Hawker Centres</Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://thumbs.dreamstime.com/b/hawker-centre-singapore-typical-food-stalls-found-chinese-text-means-180763973.jpg",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Restaurantbutton}
        onPress={() => navigation.navigate("Restaurants")}
      >
        <Text style={styles.buttonText}> Restaurants</Text>
        <Image
          style={styles.image2}
          source={{
            uri: "data:image/png;base64,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",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function foodstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Singapore Food" component={FoodScreen} />
      <Stack.Screen name="Hawker Centres" component={HawkerScreen} />
      <Stack.Screen name="Restaurants" component={RestaurantScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "tomato",
  },

  hawkerButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 16,
    justifyContent: "center",
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 50,
  },

  Restaurantbutton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
  },

  image2: {
    width: 200,
    height: 150,
    borderRadius: 50,
  },
});
