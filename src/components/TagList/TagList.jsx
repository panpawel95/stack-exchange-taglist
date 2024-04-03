import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import TagTable from "../TagTable/TagTable";
import PageSize from "../PageSize/PageSize";
import Page from "../Page/Page";

function getTags(items, order, sortedColumn, page) {
  let url = new URL(
    "https://api.stackexchange.com/2.3/tags?site=stackoverflow"
  );
  let params = new URLSearchParams(url.search);

  params.set("page", page);
  params.set("order", order);
  params.set("sort", sortedColumn);
  params.set("pagesize", items);
  url.search = params.toString();

  return fetch(url.toString()).then((response) => response.json());
}

function TagList() {
  const [items, setItems] = useState(10);
  const [order, setOrder] = useState("asc");
  const [sortedColumn, setSortedColumn] = useState("name");
  const [page, setPage] = useState(1);

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["tags", items, order, sortedColumn, page],
    queryFn: () => getTags(items, order, sortedColumn, page),
  });

  if (isError) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  const sortColumn = (columnToSort) => {
    setOrder(order === "asc" ? "desc" : "asc");
    setSortedColumn(columnToSort);
  };

  return (
    <div className="container">
      <PageSize setItems={setItems} />
      {isPending ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          <TagTable
            sortedColumn={sortedColumn}
            order={order}
            sortColumn={sortColumn}
            items={data?.items}
          />
          <Page page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}

export default TagList;
