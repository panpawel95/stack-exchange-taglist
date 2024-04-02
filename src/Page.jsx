import { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";

import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

function Page({ page, setPage }) {
  //function(event: React.ChangeEvent, page: number) => void
  return (
    <Pagination
      count={25}
      color="secondary"
      page={page}
      onChange={(e, page) => setPage(page)}
    />
  );
}

export default Page;
