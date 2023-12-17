import { useTranslation } from "qlo";

import es from "./es";
import en from "./en";
import { $ } from "@builder.io/qwik";

export const useHeroTranslation = () =>
  useTranslation(
    {
      welcomeMessage: $(() => <></>),
      haveFun: "",
      timeToCelebrate: "",
      exploreDocs: "",
    },
    { es, en }
  );
