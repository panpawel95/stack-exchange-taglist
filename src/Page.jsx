import Pagination from "@mui/material/Pagination";

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
