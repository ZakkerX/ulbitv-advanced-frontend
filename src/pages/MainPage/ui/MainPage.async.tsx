import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Test delay simulation
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
