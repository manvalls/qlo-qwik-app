import { $ } from "@builder.io/qwik";
import type { Renderer } from "qlo";

export default $(() => ({
  title: $(
    ({ newLine, highlight }: { newLine: Renderer; highlight: Renderer }) => (
      <>
        Time for a{newLine()}
        {highlight("qwik intro")}?
      </>
    )
  ),
  continueStep: $(
    ({ nextStep, totalSteps }: { nextStep: number; totalSteps: number }) => (
      <>
        Continue with Step {nextStep} of {totalSteps}
      </>
    )
  ),
  restart: "Re-Start",
  clickToSource: {
    message: $(({ bold }: { bold: Renderer }) => (
      <>
        Press and hold the {bold("ALT")} key to activate 'Click-to-Source' mode
      </>
    )),
  },
  selectTitle: {
    message: $(({ bold }: { bold: Renderer }) => (
      <>
        Select the title of this page while keeping the {bold("ALT")} key
        pressed
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
          Edit the title and save the changes. If your editor does not open,
          have a look at {supportedEditorsLink("this page")} to set the correct{" "}
          {code("LAUNCH_EDITOR")} value.
        </>
      )
    ),
  },
  updateRouteLoader: {
    message: $(({ bold, code }: { bold: Renderer; code: Renderer }) => (
      <>
        {bold("Update")} now the {code("routeLoader$")} defined in the{" "}
        {code("src/routes/layout.tsx")} file
      </>
    )),
    hint: $(({ newLine }: { newLine: Renderer }) => (
      <>
        Instead of returning the current date, you could return any possible
        string.
        {newLine()}The output is displayed in the footer.
      </>
    )),
  },
  createNewRoute: {
    message: $(({ bold, code }: { bold: Renderer; code: Renderer }) => (
      <>
        Create a {bold("new Route")} called {code("/me")}
      </>
    )),
    hint: $(
      ({ code, newRouteLink }: { code: Renderer; newRouteLink: Renderer }) => (
        <>
          Create a new directory called {code("me")} in{" "}
          {code("src/routes/[locale]")}. Within this directory create a{" "}
          {code("index.tsx")} file or copy the{" "}
          {code("src/routes/[locale]/index.tsx")} file. Your new route is now
          accessible {newRouteLink("here")} ✨
        </>
      )
    ),
  },
  forms: {
    message: $(({ bold }: { bold: Renderer }) => (
      <>Time to have a look at {bold("Forms")}</>
    )),
    hint: $(({ todoListLink }: { todoListLink: Renderer }) => (
      <>
        Open {todoListLink("the TODO list App")} and add some items to the list.
        Try the same with disabled JavaScript 🐰
      </>
    )),
  },
  congratulations: {
    message: $(({ bold }: { bold: Renderer }) => (
      <>{bold("Congratulations!")} You are now familiar with the basics! 🎉</>
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
          If you need further info on how to use qwik, have a look at{" "}
          {qwikLink("qwik.builder.io")} or join the {discordLink("Discord")}{" "}
          channel.
        </>
      )
    ),
  },
}));
