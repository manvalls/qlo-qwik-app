import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Link } from "qlo";

import {
  loadLandingPageHeadTranslation,
  useLandingPageTranslation,
} from "~/i18n/landingPage";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";

export default component$(() => {
  const t = useLandingPageTranslation();

  return (
    <>
      <Hero />
      <Starter />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          {t.counterTitle({
            highlight: (text) => <span class="highlight">{text}</span>,
            newLine: () => <br />,
          })}
        </h3>
        <Counter />
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            {t.cliCommands.title}
          </div>
          <>
            <p>
              <code>npm run dev</code>
              <br />
              {t.cliCommands.runDev}
            </p>
            <p>
              <code>npm run preview</code>
              <br />
              {t.cliCommands.runPreview}
            </p>
            <p>
              <code>npm run build</code>
              <br />
              {t.cliCommands.runBuild}
            </p>
            <p>
              <code>npm run qwik add</code>
              <br />
              {t.cliCommands.runAdd}
            </p>
          </>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              {t.exampleApps.title}
            </div>
            <p>
              {t.exampleApps.content({
                flowerLink: (text) => <Link href="/demo/flower">{text}</Link>,
                todoLink: (text) => <Link href="/demo/todolist">{text}</Link>,
              })}
            </p>
          </Infobox>

          <Infobox>
            <div q:slot="title" class="icon icon-community">
              {t.community.title}
            </div>
            <ul>
              <li>
                {t.community.discord({
                  discordLink: (text) => (
                    <a href="https://qwik.builder.io/chat" target="_blank">
                      {text}
                    </a>
                  ),
                })}
              </li>
              <li>
                {t.community.twitter({
                  twitterLink: (text) => (
                    <a href="https://twitter.com/QwikDev" target="_blank">
                      {text}
                    </a>
                  ),
                })}
              </li>
              <li>
                {t.community.github({
                  githubLink: (text) => (
                    <a href="https://github.com/BuilderIO/qwik" target="_blank">
                      {text}
                    </a>
                  ),
                })}
              </li>
              <li>
                {t.community.media({
                  mediaLink: (text) => (
                    <a href="https://qwik.builder.io/media/" target="_blank">
                      {text}
                    </a>
                  ),
                })}
              </li>
            </ul>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const useLoadDocumentHead = routeLoader$((ev) => {
  return loadLandingPageHeadTranslation(ev);
});

export const head: DocumentHead = ({ resolveValue }) =>
  resolveValue(useLoadDocumentHead);
