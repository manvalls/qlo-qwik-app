import { useTranslation } from "qlo";
import { $ } from "@builder.io/qwik";

import es from "./es";
import en from "./en";

export const useFlowerTranslation = () =>
  useTranslation(
    {
      generateFlowers: $(() => <></>),
    },
    { es, en }
  );

export * from "./head";
