// Learn more about Light and Dark modes:
// https://docs.expo.dev/guides/color-schemes/
import { forwardRef } from "react";
import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TextInput as DefaultTI,
} from "react-native";

import Colors from "../constants/Colors";

export function useThemeColor(props, colorName) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const TextInput = forwardRef((props, ref) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    "text",
  );

  return <DefaultTI style={[{ color }, style]} {...otherProps} ref={ref} />;
});
