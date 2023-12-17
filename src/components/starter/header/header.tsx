import { component$ } from "@builder.io/qwik";
import { LocaleLink, Link, useLocale } from "qlo";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import { useHeaderTranslation } from "~/i18n/header";

export default component$(() => {
  const t = useHeaderTranslation();
  const locale = useLocale();
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <Link href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </Link>
        </div>
        <ul>
          <li>
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              {t.docs}
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/examples/introduction/hello-world/"
              target="_blank"
            >
              {t.examples}
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/tutorial/welcome/overview/"
              target="_blank"
            >
              {t.tutorials}
            </a>
          </li>
          <li>
            <LocaleLink
              prefetch
              class={locale.value === "es" ? styles.selected : ""}
              locale="es"
              lang="es"
            >
              Español
            </LocaleLink>
          </li>
          <li>
            <LocaleLink
              prefetch
              class={locale.value === "en" ? styles.selected : ""}
              locale="en"
              lang="en"
            >
              English
            </LocaleLink>
          </li>
        </ul>
      </div>
    </header>
  );
});
