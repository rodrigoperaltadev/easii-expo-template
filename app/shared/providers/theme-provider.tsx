import type { PropsWithChildren } from "react";
import { ThemeContext } from "../theme/theme-context";
import { theme } from "../theme/tokens";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
