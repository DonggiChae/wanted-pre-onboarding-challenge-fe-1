import { BrowserRouter,Routes, Route } from "react-router-dom";
import LogInPage from "./router/SignIn";
import Todos from "./router/Todos";
import TodoDetail from "./components/Todos/TodoDetail";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Header from "./components/Header";

const queryClient = new QueryClient()

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LogInPage />}>
          </Route>
          <Route path="/todos" element={<Todos />}>
            <Route path="/todos/:todoID" element={<Todos />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  );
}

export default App;