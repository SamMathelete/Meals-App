import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetail from "./MealDetail";

type RootStackParamList = {
  MealItem: undefined;
  MealDetails: {
    mealID: string;
  };
};

interface Props {
  id: string;
  title: string;
  imageURL: string;
  duration: number;
  complexity: string;
  affordability: string;
}

const MealItem: React.FC<Props> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "MealItem">>();

  const pressHandler = () => {
    navigation.navigate("MealDetails", {
      mealID: props.id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: props.imageURL }} style={styles.image} />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <MealDetail
          duration={props.duration}
          affordability={props.affordability}
          complexity={props.complexity}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
});

export default MealItem;
