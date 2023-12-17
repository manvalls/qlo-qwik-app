import type {
  DocumentHeadValue,
  RequestEventLoader,
} from "@builder.io/qwik-city";
import { loadTranslation } from "qlo";

import es from "./es";
import en from "./en";

export const loadLandingPageHeadTranslation = async (
  ev: RequestEventLoader<any>
): Promise<DocumentHeadValue> => {
  return loadTranslation(ev, { en, es });
};
