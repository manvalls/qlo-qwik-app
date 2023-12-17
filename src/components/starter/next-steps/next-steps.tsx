import { component$, $, useOnWindow, useSignal } from "@builder.io/qwik";
import styles from "./next-steps.module.css";
import { useNextStepsTranslation } from "~/i18n/next-steps";
import { Link } from "qlo";

export default component$(() => {
  const gettingStartedStep = useSignal(0);
  const t = useNextStepsTranslation();

  const GETTING_STARTED_STEPS = [
    {
      message: () =>
        t.clickToSource.message({
          bold: (text) => <b>{text}</b>,
        }),
    },
    {
      message: () =>
        t.selectTitle.message({
          bold: (text) => <b>{text}</b>,
        }),
      hint: () =>
        t.selectTitle.hint({
          supportedEditorsLink: (text) => (
            <a
              href="https://github.com/yyx990803/launch-editor#supported-editors"
              target="_blank"
            >
              {text}
            </a>
          ),
          code: (text) => <code>{text}</code>,
        }),
    },
    {
      message: () =>
        t.updateRouteLoader.message({
          bold: (text) => <b>{text}</b>,
          code: (text) => <code>{text}</code>,
        }),
      hint: () =>
        t.updateRouteLoader.hint({
          newLine: () => <br />,
        }),
    },
    {
      message: () =>
        t.createNewRoute.message({
          bold: (text) => <b>{text}</b>,
          code: (text) => <code>{text}</code>,
        }),
      hint: () =>
        t.createNewRoute.hint({
          code: (text) => <code>{text}</code>,
          newRouteLink: (text) => (
            <Link href="/me" target="_blank">
              {text}
            </Link>
          ),
        }),
    },
    {
      message: () =>
        t.forms.message({
          bold: (text) => <b>{text}</b>,
        }),
      hint: () =>
        t.forms.hint({
          todoListLink: (text) => (
            <a href="/demo/todolist" target="_blank">
              {text}
            </a>
          ),
        }),
    },
    {
      message: () =>
        t.congratulations.message({
          bold: (text) => <b>{text}</b>,
        }),
      hint: () =>
        t.congratulations.hint({
          qwikLink: (text) => (
            <a href="https://qwik.builder.io" target="_blank">
              {text}
            </a>
          ),
          discordLink: (text) => (
            <a href="https://qwik.builder.io/chat" target="_blank">
              {text}
            </a>
          ),
        }),
    },
  ];

  useOnWindow(
    "keydown",
    $((e) => {
      if ((e as KeyboardEvent).key === "Alt") {
        gettingStartedStep.value = 1;
      }
    })
  );

  return (
    <div class="container container-purple container-center">
      <h2>
        {t.title({
          newLine: () => <br />,
          highlight: (text) => <span class="highlight">{text}</span>,
        })}
      </h2>
      <div class={styles.gettingstarted}>
        <div class={styles.intro}>
          {GETTING_STARTED_STEPS[gettingStartedStep.value].message()}
        </div>
        <span class={styles.hint}>
          {GETTING_STARTED_STEPS[gettingStartedStep.value].hint?.()}
        </span>
      </div>
      {gettingStartedStep.value + 1 < GETTING_STARTED_STEPS.length ? (
        <button class="button-dark" onClick$={() => gettingStartedStep.value++}>
          {t.continueStep({
            nextStep: gettingStartedStep.value + 2,
            totalSteps: GETTING_STARTED_STEPS.length,
          })}
        </button>
      ) : (
        <button
          class="button-dark"
          onClick$={() => (gettingStartedStep.value = 0)}
        >
          {t.restart}
        </button>
      )}
    </div>
  );
});
