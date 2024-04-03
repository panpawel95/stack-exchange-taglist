import { within, userEvent, expect } from "@storybook/test";
import { fn } from "@storybook/test";

import TagTable from "./TagTable";

export default {
  title: "Components/TagTable",
  component: TagTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    sortedColumn: { control: "inline-radio", options: ["name", "popular"] },
    order: { control: "inline-radio", options: ["asc", "desc"] },
    sortColumn: {
      description: "Function that sets state controlling column being sorted",
    },
    items: {
      control: "array",
      description: "Data returned from StackExchange endpoint",
    },
  },
  args: {
    sortedColumn: "name",
    order: "asc",
    sortColumn: fn(),
    items: [
      {
        has_synonyms: false,
        is_moderator_only: false,
        is_required: false,
        count: 300,
        name: "javascript",
      },
      {
        has_synonyms: false,
        is_moderator_only: false,
        is_required: false,
        count: 200,
        name: "react",
      },
      {
        has_synonyms: false,
        is_moderator_only: false,
        is_required: false,
        count: 100,
        name: "react-query",
      },
    ],
  },
};

export const Default = {};
