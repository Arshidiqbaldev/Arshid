import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Work from "./components/Work";
import Things from "./components/Things";
import Notfound from "./components/Notfound";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/work",
    element: (
      <Layout>
        <Work />
      </Layout>
    ),
  },
  {
    path: "/things",
    element: (
      <Layout>
        <Things />
      </Layout>
    ),
  },

  {
    path: "*",
    element: (
      <Layout>
        <Notfound />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

export { router };
