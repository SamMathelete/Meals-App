import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

type RootStackParamsList = {
  MealOverview: { categoryID: string };
};

type Props = NativeStackScreenProps<RootStackParamsList, "MealOverview">;

const MealsOverview: React.FC<Props> = ({ route, navigation }) => {
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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverview;
