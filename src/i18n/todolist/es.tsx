import { $ } from "@builder.io/qwik";
import type { Renderer } from "qlo";

export default $(() => ({
  title: $(({ highlight }: { highlight: Renderer }) => (
    <>Lista de {highlight("Tareas")}</>
  )),
  noItems: "No se encontraron tareas",
  addItem: "Agregar tarea",
  footer:
    "PD: Esta pequeña aplicación funciona incluso cuando JavaScript está deshabilitado.",
}));
