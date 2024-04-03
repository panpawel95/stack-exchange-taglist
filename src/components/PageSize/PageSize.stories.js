import { within, userEvent, expect } from "@storybook/test";
import { fn } from "@storybook/test";

import PageSize from "./PageSize";

export default {
  title: "Components/PageSize",
  component: PageSize,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { setItems: fn() },
};

export const Default = {};
