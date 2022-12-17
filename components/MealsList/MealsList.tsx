import { View, FlatList, StyleSheet, ListRenderItemInfo } from "react-native";
import Meal from "../../models/meal";
import MealItem from "./MealItem";

interface Props {
  items: Meal[];
}

const MealsList: React.FC<Props> = ({ items }) => {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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

export default MealsList;
