import { within, userEvent, expect } from "@storybook/test";
import { fn } from "@storybook/test";

import Page from "./Page";

export default {
  title: "Components/Page",
  component: Page,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { page: 1, setPage: fn() },
};

export const Default = {};
