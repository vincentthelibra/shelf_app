import { Image, useColorScheme } from "react-native";

import DarkLogo from "../assets/img/shelf-60_dark.png";
import LightLogo from "../assets/img/shelf-60_light.png";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
