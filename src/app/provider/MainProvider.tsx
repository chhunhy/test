"use client";

import React, { ReactNode } from "react";
import StyledJsxRegistry from "../registry";
import StoreProvider from "./StoreProvider";
import NextUILayout from "./NextUIProvider";
interface MainProviderProps {
  children: ReactNode;
}
export default function MainProvider({ children }: MainProviderProps) {
  return (
    <StoreProvider>
      <NextUILayout>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </NextUILayout>
    </StoreProvider>
  );
}