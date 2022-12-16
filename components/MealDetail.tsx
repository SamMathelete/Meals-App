import { StyleSheet, View, Text } from "react-native";

interface Props {
  duration: number;
  complexity: string;
  affordability: string;
  style?: {};
  textStyle?: {};
}

const MealDetail: React.FC<Props> = (props) => {
  return (
    <View style={[styles.details, props.style]}>
      <Text style={[styles.detailItem, props.textStyle]}>
        {props.duration} m
      </Text>
      <Text style={[styles.detailItem, props.textStyle]}>
        {props.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, props.textStyle]}>
        {props.affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetail;
