// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
}
