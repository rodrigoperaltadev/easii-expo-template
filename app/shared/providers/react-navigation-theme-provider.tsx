import { ThemeProvider } from "@react-navigation/native";
import type { PropsWithChildren } from "react";
import { MainTheme } from "../theme/main-theme";

export const ReactNavigationThemeProvider = ({
  children,
}: PropsWithChildren) => {
  return <ThemeProvider value={MainTheme}>{children}</ThemeProvider>;
};
