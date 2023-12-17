import { useTranslation } from "qlo";

import es from "./es";
import en from "./en";

export const useFooterTranslation = () =>
  useTranslation(
    {
      madeBy: "",
    },
    { es, en }
  );
