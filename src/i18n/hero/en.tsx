import { $ } from "@builder.io/qwik";
import type { Renderer } from "qlo";

export default $(() => ({
  welcomeMessage: $(
    ({ highlight, newLine }: { highlight: Renderer; newLine: Renderer }) => (
      <>
        So {highlight("fantastic")}
        {newLine()} to have {highlight("you")} here
      </>
    )
  ),
  haveFun: "Have fun building your App with Qwik.",
  timeToCelebrate: "Time to celebrate",
  exploreDocs: "Explore the docs",
}));
