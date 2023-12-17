import { $ } from "@builder.io/qwik";
import type { Renderer } from "qlo";

export default $(() => ({
  title: $(({ highlight }: { highlight: Renderer }) => (
    <>{highlight("TODO")} List</>
  )),
  noItems: "No items found",
  addItem: "Add item",
  footer: "PS: This little app works even when JavaScript is disabled.",
}));
