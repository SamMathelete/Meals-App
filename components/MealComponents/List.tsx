import { Text, StyleSheet, View } from "react-native";

interface Props {
  data: string[];
}

const List: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default List;
