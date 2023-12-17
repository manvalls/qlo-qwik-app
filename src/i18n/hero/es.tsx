import { $ } from "@builder.io/qwik";
import type { Renderer } from "qlo";

export default $(() => ({
  welcomeMessage: $(
    ({ highlight, newLine }: { highlight: Renderer; newLine: Renderer }) => (
      <>
        Es {highlight("fantástico")}
        {newLine()} que {highlight("tú")} estés aquí
      </>
    )
  ),
  haveFun: "Diviértete construyendo tu App con Qwik.",
  timeToCelebrate: "Hora de celebrar",
  exploreDocs: "Explora la documentación",
}));
