import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TagList from "./components/TagList/TagList";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TagList />
    </QueryClientProvider>
  );
}

export default App;
