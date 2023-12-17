import { $ } from "@builder.io/qwik";
import type { Renderer } from "qlo";

export default $(() => ({
  counterTitle: $(
    ({ highlight, newLine }: { highlight: Renderer; newLine: Renderer }) => (
      <>
        Puedes {highlight("contar")}
        {newLine()} conmigo
      </>
    )
  ),
  cliCommands: {
    title: "Comandos CLI",
    runDev: "Inicia el servidor de desarrollo y observa los cambios",
    runPreview:
      "Crea una compilación de producción y inicia un servidor para previsualizarla",
    runBuild: "Crea una compilación de producción",
    runAdd: "Ejecuta el CLI de qwik para agregar integraciones",
  },
  exampleApps: {
    title: "Aplicaciones de ejemplo",
    content: $(
      ({
        flowerLink,
        todoLink,
      }: {
        flowerLink: Renderer;
        todoLink: Renderer;
      }) => (
        <>
          Echa un vistazo a la {flowerLink("app flor")} o a la{" "}
          {todoLink("app de tareas")}.
        </>
      )
    ),
  },
  community: {
    title: "Comunidad",
    discord: $(({ discordLink }: { discordLink: Renderer }) => (
      <>
        ¿Tienes preguntas o simplemente quieres saludar?{" "}
        {discordLink("¡Chatea en discord!")}
      </>
    )),
    twitter: $(({ twitterLink }: { twitterLink: Renderer }) => (
      <>Sigue a {twitterLink("@QwikDev")} en Twitter</>
    )),
    github: $(({ githubLink }: { githubLink: Renderer }) => (
      <>Abre issues y contribuye en {githubLink("GitHub")}</>
    )),
    media: $(({ mediaLink }: { mediaLink: Renderer }) => (
      <>Mira {mediaLink("presentaciones, podcasts, videos, etc.")}</>
    )),
  },
}));
