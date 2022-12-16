import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View, ListRenderItemInfo } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

type RootStackParamsList = {
  MealOverview: { categoryID: string };
};

type Props = NativeStackScreenProps<RootStackParamsList, "MealOverview">;

const MealsOverview: React.FC<Props> = ({ route, navigation }) => {
  const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => {
    const mealItemProps = {
      id: item.id,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      imageURL: item.imageUrl,
      title: item.title,
    };
    return <MealItem {...mealItemProps} />;
  };

  const catID = route.params.categoryID;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    )?.title;
    navigation.setOptions({
      title: categoryTitle,
      headerBackTitle: "All Categories",
    });
  }, [catID, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverview;
