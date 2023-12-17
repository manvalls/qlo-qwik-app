import { useTranslation } from "qlo";
import { $ } from "@builder.io/qwik";

import es from "./es";
import en from "./en";

export const useLandingPageTranslation = () =>
  useTranslation(
    {
      counterTitle: $(() => <></>),
      cliCommands: {
        title: "",
        runDev: "",
        runPreview: "",
        runBuild: "",
        runAdd: "",
      },
      exampleApps: {
        title: "",
        content: $(() => <></>),
      },
      community: {
        title: "",
        discord: $(() => <></>),
        twitter: $(() => <></>),
        github: $(() => <></>),
        media: $(() => <></>),
      },
    },
    { es, en }
  );

export * from "./head";
