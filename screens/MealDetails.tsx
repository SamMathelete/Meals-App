import { useLayoutEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealComponents/Subtitle";
import List from "../components/MealComponents/List";
import IconButton from "../components/IconButton";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addAction, removeAction } from "../store/redux/favourites";

type RootStackParamList = {
  MealDetails: { mealID: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "MealDetails">;

const MealDetails: React.FC<Props> = ({ navigation, route }) => {
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  const favs = useAppSelector((state) => state.favouriteMeals.id);
  const dispatch = useAppDispatch();

  const mealIsFavourite = favs.includes(mealID);

  const headerButtonPressHandler = () => {
    if (mealIsFavourite) {
      dispatch(removeAction(mealID));
    } else {
      dispatch(addAction(mealID));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={{ marginBottom: 32 }}>
      <Image
        source={{
          uri: selectedMeal!.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetail
        duration={selectedMeal!.duration}
        affordability={selectedMeal!.affordability}
        complexity={selectedMeal!.complexity}
        textStyle={styles.detailText}
      />
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "80%" }}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal!.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal!.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});

export default MealDetails;
