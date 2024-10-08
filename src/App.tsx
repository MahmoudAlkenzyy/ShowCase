import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AllVehicles, Home, MasterLayout } from "./components/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/all-vehicles",
          element: <AllVehicles />,
        },
      ],
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
