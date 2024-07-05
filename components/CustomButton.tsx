import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import React from "react";
import { isLoading } from "expo-font";

const CustomButton = (button: {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: any;
  isLoading?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={button.handlePress}
      activeOpacity={0.7}
      className={`bg-secondary round-xl min-h-[62px] justify-center items-center ${
        button.containerStyles
      } ${button.isLoading ? "opacity-50" : ""}`}
      disabled={button.isLoading}
    >
      <Text
        className={`text-primary font-psemibold text-lg ${button.textStyles}`}
      >
        {button.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
