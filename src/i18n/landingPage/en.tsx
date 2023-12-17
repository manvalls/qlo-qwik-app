import { $ } from "@builder.io/qwik";
import type { Renderer } from "qlo";

export default $(() => ({
  counterTitle: $(
    ({ highlight, newLine }: { highlight: Renderer; newLine: Renderer }) => (
      <>
        You can {highlight("count")}
        {newLine()} on me
      </>
    )
  ),
  cliCommands: {
    title: "CLI Commands",
    runDev: "Starts the development server and watches for changes",
    runPreview: "Creates production build and starts a server to preview it",
    runBuild: "Creates production build",
    runAdd: "Runs the qwik CLI to add integrations",
  },
  exampleApps: {
    title: "Example Apps",
    content: $(
      ({
        flowerLink,
        todoLink,
      }: {
        flowerLink: Renderer;
        todoLink: Renderer;
      }) => (
        <>
          Have a look at the {flowerLink("Flower App")} or{" "}
          {todoLink("Todo App")}.
        </>
      )
    ),
  },
  community: {
    title: "Community",
    discord: $(({ discordLink }: { discordLink: Renderer }) => (
      <>Questions or just want to say hi? {discordLink("Chat on discord!")}</>
    )),
    twitter: $(({ twitterLink }: { twitterLink: Renderer }) => (
      <>Follow {twitterLink("@QwikDev")} on Twitter</>
    )),
    github: $(({ githubLink }: { githubLink: Renderer }) => (
      <>Open issues and contribute on {githubLink("GitHub")}</>
    )),
    media: $(({ mediaLink }: { mediaLink: Renderer }) => (
      <>Watch {mediaLink("Presentations, Podcasts, Videos, etc.")}</>
    )),
  },
}));
