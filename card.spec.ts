// @vitest-environment nuxt
import { expect, test } from "vitest";
import Card from "./Card.vue";
import { mountSuspended } from "vitest-environment-nuxt/utils";

test("my test", () => {
  const wrapper = mountSuspended(Card, {
    props: {
      appeal: {
        title: "APPEAL TITLE",
      },
    },
  });
});

