import { useQuery } from "@tanstack/react-query";

const url =
  "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow";

const data = {
  items: [
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 2528698,
      name: "javascript",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 2191961,
      name: "python",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1917221,
      name: "java",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1614913,
      name: "c#",
    },
    {
      collectives: [
        {
          tags: ["php"],
          external_links: [
            {
              type: "support",
              link: "https://stackoverflow.com/contact?topic=15",
            },
          ],
          description:
            "A collective where developers working with PHP can learn and connect about the open source scripting language.",
          link: "/collectives/php",
          name: "PHP",
          slug: "php",
        },
      ],
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1464394,
      name: "php",
    },
    {
      collectives: [
        {
          tags: ["android", "ios"],
          external_links: [
            {
              type: "support",
              link: "https://stackoverflow.com/contact?topic=15",
            },
          ],
          description:
            "A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
          link: "/collectives/mobile-dev",
          name: "Mobile Development",
          slug: "mobile-dev",
        },
      ],
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1417159,
      name: "android",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1187305,
      name: "html",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1034839,
      name: "jquery",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 806686,
      name: "c++",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 804175,
      name: "css",
    },
    {
      collectives: [
        {
          tags: ["android", "ios"],
          external_links: [
            {
              type: "support",
              link: "https://stackoverflow.com/contact?topic=15",
            },
          ],
          description:
            "A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
          link: "/collectives/mobile-dev",
          name: "Mobile Development",
          slug: "mobile-dev",
        },
      ],
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 687217,
      name: "ios",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 670690,
      name: "sql",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 662019,
      name: "mysql",
    },
    {
      collectives: [
        {
          tags: [
            "plyr",
            "rlang",
            "knitr",
            "purrr",
            "r-raster",
            "readr",
            "dtplyr",
            "ggplot2",
            "shinyapps",
            "forcats",
            "tidyr",
            "quantmod",
            "shinydashboard",
            "r",
            "tibble",
            "zoo",
            "rvest",
            "stringr",
            "r-caret",
            "shiny-server",
            "data.table",
            "r-package",
            "rstudio",
            "shiny",
            "lubridate",
            "dplyr",
            "tidyverse",
          ],
          external_links: [
            {
              type: "support",
              link: "https://stackoverflow.com/contact?topic=15",
            },
          ],
          description:
            "A collective where data scientists and AI researchers gather to find, share, and learn about R and other subtags like knitr and dplyr.",
          link: "/collectives/r-language",
          name: "R Language",
          slug: "r-language",
        },
      ],
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 505460,
      name: "r",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 476551,
      name: "reactjs",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 471968,
      name: "node.js",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 416676,
      name: "arrays",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 403885,
      name: "c",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 374628,
      name: "asp.net",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 360325,
      name: "json",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 343617,
      name: "python-3.x",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 338047,
      name: "ruby-on-rails",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 337836,
      name: ".net",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 334491,
      name: "sql-server",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 333345,
      name: "swift",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 311780,
      name: "django",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 304041,
      name: "angular",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 292331,
      name: "objective-c",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 286605,
      name: "pandas",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 286463,
      name: "excel",
    },
  ],
  has_more: true,
  quota_max: 300,
  quota_remaining: 258,
};

function getTags() {
  return data;
  //   return fetch(url).then((response) => response.json());
}

function TagList() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["tags"],
    queryFn: getTags,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(data);

  return <div>taglist</div>;
}

export default TagList;
