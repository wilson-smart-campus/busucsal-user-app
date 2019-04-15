import { Platform } from "react-native";

export const KEYBOARD_BEHAVIOR = Platform.OS === "ios" ? "padding" : undefined;
