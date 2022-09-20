import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Test delay simulation
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
