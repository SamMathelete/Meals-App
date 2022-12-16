import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon: any;
  color: string;
  onPress: () => void;
}

const IconButton: React.FC<Props> = ({ icon, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
