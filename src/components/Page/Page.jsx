import Pagination from "@mui/material/Pagination";
import "./page.css";

function Page({ page, setPage }) {
  return (
    <div className="pagination">
      <Pagination
        count={25}
        color="secondary"
        page={page}
        onChange={(e, page) => setPage(page)}
      />
    </div>
  );
}

export default Page;
