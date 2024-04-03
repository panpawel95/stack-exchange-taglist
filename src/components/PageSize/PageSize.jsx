import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./pageSize.css";

function PageSize({ setItems }) {
  const [pageSize, setPageSize] = useState("10");
  function handleSetPageSize(e) {
    if (e.target.value === "") {
      setPageSize("");
      return;
    }

    const value = Number(e.target.value);

    if (Number.isNaN(value)) {
      return null;
    }

    if (value < 1 || value > 99) {
      return null;
    }

    if (value !== Math.round(value)) {
      return null;
    }

    setPageSize(String(value));
  }

  return (
    <div className="page-size">
      <TextField
        id="outlined-basic"
        label="Page size"
        variant="outlined"
        color="secondary"
        onChange={handleSetPageSize}
        value={pageSize}
      />

      <Button
        variant="outlined"
        color="secondary"
        endIcon={<SendIcon />}
        onClick={() => setItems(pageSize)}
      >
        Select
      </Button>
    </div>
  );
}

export default PageSize;
