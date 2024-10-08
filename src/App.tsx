import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AllVehicles, CarDetails, Home, MasterLayout } from "./components/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const router = createHashRouter([
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
        {
          path: "/all-vehicles/car/:carId",
          element: <CarDetails />,
        },
      ],
    },
  ]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
