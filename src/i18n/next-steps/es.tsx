import { $ } from "@builder.io/qwik";
import type { Renderer } from "qlo";

export default $(() => ({
  title: $(
    ({ newLine, highlight }: { newLine: Renderer; highlight: Renderer }) => (
      <>
        ¿Listo para una{newLine()}
        {highlight("introducción a qwik")}?
      </>
    )
  ),
  continueStep: $(
    ({ nextStep, totalSteps }: { nextStep: number; totalSteps: number }) => (
      <>
        Continuar con el Paso {nextStep} de {totalSteps}
      </>
    )
  ),
  restart: "Re-Iniciar",
  clickToSource: {
    message: $(({ bold }: { bold: Renderer }) => (
      <>
        Presiona y mantén presionada la tecla {bold("ALT")} para activar el modo
        'Click-to-Source'
      </>
    )),
  },
  selectTitle: {
    message: $(({ bold }: { bold: Renderer }) => (
      <>
        Selecciona el título de esta página mientras mantienes presionada la
        tecla {bold("ALT")}
      </>
    )),
    hint: $(
      ({
        supportedEditorsLink,
        code,
      }: {
        supportedEditorsLink: Renderer;
        code: Renderer;
      }) => (
        <>
          Edita el título y guarda los cambios. Si tu editor no se abre, echa un
          vistazo a {supportedEditorsLink("esta página")} para configurar el
          valor correcto de {code("LAUNCH_EDITOR")}.
        </>
      )
    ),
  },
  updateRouteLoader: {
    message: $(({ bold, code }: { bold: Renderer; code: Renderer }) => (
      <>
        {bold("Actualiza")} ahora el {code("routeLoader$")} definido en el
        archivo {code("src/routes/layout.tsx")}
      </>
    )),
    hint: $(({ newLine }: { newLine: Renderer }) => (
      <>
        En lugar de devolver la fecha actual, puedes devolver cualquier cadena
        posible.
        {newLine()}La salida se muestra en el pie de página.
      </>
    )),
  },
  createNewRoute: {
    message: $(({ bold, code }: { bold: Renderer; code: Renderer }) => (
      <>
        Crea una {bold("nueva Ruta")} llamada {code("/me")}
      </>
    )),
    hint: $(
      ({ code, newRouteLink }: { code: Renderer; newRouteLink: Renderer }) => (
        <>
          Crea un nuevo directorio llamado {code("me")} en{" "}
          {code("src/routes/[locale]")}. Dentro de este directorio crea un
          archivo {code("index.tsx")} o copia el archivo{" "}
          {code("src/routes/[locale]/index.tsx")}. Tu nueva ruta ahora es
          accesible {newRouteLink("aquí")} ✨
        </>
      )
    ),
  },
  forms: {
    message: $(({ bold }: { bold: Renderer }) => (
      <>Es hora de echar un vistazo a {bold("Forms")}</>
    )),
    hint: $(({ todoListLink }: { todoListLink: Renderer }) => (
      <>
        Abre {todoListLink("la aplicación de lista de tareas")} y agrega algunos
        elementos a la lista. Intenta lo mismo con JavaScript deshabilitado 🐰
      </>
    )),
  },
  congratulations: {
    message: $(({ bold }: { bold: Renderer }) => (
      <>
        {bold("¡Felicidades!")} ¡Ahora estás familiarizado con los conceptos
        básicos! 🎉
      </>
    )),
    hint: $(
      ({
        qwikLink,
        discordLink,
      }: {
        qwikLink: Renderer;
        discordLink: Renderer;
      }) => (
        <>
          Si necesitas más información sobre cómo usar qwik, echa un vistazo a{" "}
          {qwikLink("qwik.builder.io")} o únete al{" "}
          {discordLink("canal de Discord")}.
        </>
      )
    ),
  },
}));
