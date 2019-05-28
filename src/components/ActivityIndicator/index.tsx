import React from "react";
import {
  View,
  ActivityIndicatorProps,
  ActivityIndicator as ActivityIndicatorRN,
} from "react-native";
import styles from "../../resources/styles";

interface IProps extends ActivityIndicatorProps {}

const ActivityIndicator = (props: IProps) => (
  <View style={styles.FlexCenter}>
    <ActivityIndicatorRN {...props} />
  </View>
);

export default ActivityIndicator;
