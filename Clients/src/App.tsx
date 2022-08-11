import { BrowserRouter,Routes, Route } from "react-router-dom";
import Authorize from "./router/Authorize";
import Todos from "./router/Todos";
import TodoDetail from "./components/Todos/TodoDetail";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Header from "./components/Header";

const queryClient = new QueryClient()

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <Header />
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authorize />}>
          </Route>
          <Route path="/todos" element={<Todos />}>
            <Route path="/todos/:index" element={<Todos />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  );
}

export default App;