import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

const columns = [
  {
    id: "name",
    label: "Name",
    sort: "name",
  },
  {
    id: "count",
    label: "Posts",
    sort: "popular",
  },
  {
    id: "is_required",
    label: "Required",
  },
  {
    id: "has_synonyms",
    label: "Synonyms",
  },
];

function TagTable({ sortedColumn, order, sortColumn, items = [] }) {
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>
                {column.label}
                {column.sort ? (
                  <TableSortLabel
                    active={sortedColumn === column.sort}
                    direction={sortedColumn === column.sort ? order : "asc"}
                    onClick={() => sortColumn(column.sort)}
                  ></TableSortLabel>
                ) : null}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((tag) => (
            <TableRow key={tag.name}>
              <TableCell>{tag.name}</TableCell>
              <TableCell>{tag.count}</TableCell>
              <TableCell>
                {tag.is_required ? "Required" : "Not required"}
              </TableCell>
              <TableCell>
                {tag.has_synonyms ? "Has synonyms" : "No synonyms"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TagTable;
