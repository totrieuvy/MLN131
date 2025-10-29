import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Homepage = lazy(() => import("./component/homepage/Homepage"));
const Layout = lazy(() => import("./layout/Layout"));
const Factor = lazy(() => import("./component/factors/Factor"));

const Loading = () => <div style={{ textAlign: "center", marginTop: "50px" }}>Đang tải...</div>;

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <Homepage />
            </Suspense>
          ),
        },
        {
          path: "/factors",
          element: (
            <Suspense fallback={<Loading />}>
              <Factor />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
