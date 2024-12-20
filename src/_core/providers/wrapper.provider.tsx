import { ReactNode } from "react";
import { StoreProvider } from "./store.provider";
import { ThemeProvider } from "./theme.provider";
import { TooltipProvider } from "../components/fragments/tooltip";

export default function WrapperProvider({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <TooltipProvider>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </TooltipProvider>
    </StoreProvider>
  );
}
