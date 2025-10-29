import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AiChat from "./component/ai-chat/AiChat";
import Member from "./component/member/Member";

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
        {
          path: "/ai-chat",
          element: (
            <Suspense fallback={<Loading />}>
              <AiChat />
            </Suspense>
          ),
        },
        {
          path: "/members",
          element: (
            <Suspense fallback={<Loading />}>
              <Member />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
