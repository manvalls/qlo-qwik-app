import { useTranslation } from "qlo";

import es from "./es";
import en from "./en";
import { $ } from "@builder.io/qwik";

export const useNextStepsTranslation = () =>
  useTranslation(
    {
      title: $(() => <></>),
      continueStep: $(() => <></>),
      clickToSource: {
        message: $(() => <></>),
      },
      selectTitle: {
        message: $(() => <></>),
        hint: $(() => <></>),
      },
      updateRouteLoader: {
        message: $(() => <></>),
        hint: $(() => <></>),
      },
      createNewRoute: {
        message: $(() => <></>),
        hint: $(() => <></>),
      },
      forms: {
        message: $(() => <></>),
        hint: $(() => <></>),
      },
      congratulations: {
        message: $(() => <></>),
        hint: $(() => <></>),
      },
      restart: "",
    },
    { es, en }
  );
