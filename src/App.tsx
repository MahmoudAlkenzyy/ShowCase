import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home, MasterLayout } from "./components/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
