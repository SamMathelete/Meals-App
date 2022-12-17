import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useAppSelector } from "../hooks/hooks";

const Favourites: React.FC = () => {
  const favs = useAppSelector((state) => state.favouriteMeals.id);

  if (favs.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No Favourite Meals.</Text>
      </View>
    );
  }

  const favouriteMeals = MEALS.filter((meal) => {
    return favs.includes(meal.id);
  });

  return <MealsList items={favouriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Favourites;
