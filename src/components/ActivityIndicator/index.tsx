import React from "react";
import {
  View,
  ActivityIndicatorProps,
  ActivityIndicator as ActivityIndicatorRN,
} from "react-native";
import styles from "../../resources/styles";

const ActivityIndicator = (props: ActivityIndicatorProps) => (
  <View style={styles.FlexCenter}>
    <ActivityIndicatorRN {...props} />
  </View>
);

export default ActivityIndicator;
