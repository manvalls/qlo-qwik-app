import { useTranslation } from "qlo";

import es from "./es";
import en from "./en";

export const useHeaderTranslation = () =>
  useTranslation(
    {
      docs: "",
      examples: "",
      tutorials: "",
    },
    { es, en }
  );
