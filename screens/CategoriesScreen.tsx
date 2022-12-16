import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, ListRenderItemInfo } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

type RootStackParamList = {
  MealCategories: undefined;
  MealOverview: { categoryID: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "MealCategories">;

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigation.navigate("MealOverview", { categoryID: itemData.item.id });
    };
    return (
      <CategoryGridTile
        onPress={pressHandler}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
