import { $ } from "@builder.io/qwik";
import type { Renderer } from "qlo";

export default $(() => ({
  generateFlowers: $(({ highlight }: { highlight: Renderer }) => (
    <>{highlight("Generate")} Flowers</>
  )),
}));
