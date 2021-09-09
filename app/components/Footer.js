import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import Icon from "./Icon";

function Footer({style}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.settingsIcon}>
        <Icon image={require("../assets/Icon/settings.png")} size={40} />
      </View>
      <View style={styles.notificationIcon}>
        <Icon image={require("../assets/Icon/notification.png")} size={40} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "center",
  },
  settingsIcon: {
    flex: 1,
    marginHorizontal: 40,
  },
  notificationIcon: {
    flex: 1,
    marginHorizontal: 40,
  },
});
export default Footer;
