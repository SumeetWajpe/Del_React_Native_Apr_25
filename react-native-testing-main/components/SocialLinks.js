import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Button,
  Image,
} from "react-native";

const Icons = {
  twitter: require("../assets/twitter.png"),
  instagram: require("../assets/instagram.png"),
};

const SocialLinks = ({ type, link, label }) => {
  const onSocialLinkPress = () => {
    Linking.openURL(link);
  };
  return (
    <View style={styles.social}>
      <Image
        source={Icons[type]}
        style={styles.icon}
        accessibilityRole="image"
      />

      <Text onPress={onSocialLinkPress} style={styles.label}>
        {label}
      </Text>
      <Button title="Test !"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  social: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
  },
});

export default SocialLinks;
