import { useTranslation } from "qlo";
import { $ } from "@builder.io/qwik";

import es from "./es";
import en from "./en";

export const useTodoListTranslation = () =>
  useTranslation(
    {
      title: $(() => <></>),
      noItems: "",
      addItem: "",
      footer: "",
    },
    { es, en }
  );

export * from "./head";
