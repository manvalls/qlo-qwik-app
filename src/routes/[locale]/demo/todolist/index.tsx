import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  routeAction$,
  zod$,
  z,
  Form,
} from "@builder.io/qwik-city";
import styles from "./todolist.module.css";
import {
  loadTodoListHeadTranslation,
  useTodoListTranslation,
} from "~/i18n/todolist";

interface ListItem {
  text: string;
}

export const list: ListItem[] = [];

export const useListLoader = routeLoader$(() => {
  return list;
});

export const useAddToListAction = routeAction$(
  (item) => {
    list.push(item);
    return {
      success: true,
    };
  },
  zod$({
    text: z.string().trim().min(1),
  })
);

export default component$(() => {
  const list = useListLoader();
  const action = useAddToListAction();
  const t = useTodoListTranslation();

  return (
    <>
      <div class="container container-center">
        <h1>
          {t.title({
            highlight: (text) => <span class="highlight">{text}</span>,
          })}
        </h1>
      </div>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center">
        {list.value.length === 0 ? (
          <span class={styles.empty}>{t.noItems}</span>
        ) : (
          <ul class={styles.list}>
            {list.value.map((item, index) => (
              <li key={`items-${index}`}>{item.text}</li>
            ))}
          </ul>
        )}
      </div>

      <div class="container container-center">
        <Form action={action} spaReset>
          <input type="text" name="text" required class={styles.input} />{" "}
          <button type="submit" class="button-dark">
            {t.addItem}
          </button>
        </Form>

        <p class={styles.hint}>{t.footer}</p>
      </div>
    </>
  );
});

export const useLoadDocumentHead = routeLoader$((ev) => {
  return loadTodoListHeadTranslation(ev);
});

export const head: DocumentHead = ({ resolveValue }) =>
  resolveValue(useLoadDocumentHead);
