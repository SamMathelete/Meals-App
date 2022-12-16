import { StyleSheet, Text, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

const Subtitle: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitles}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitles: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});

export default Subtitle;
