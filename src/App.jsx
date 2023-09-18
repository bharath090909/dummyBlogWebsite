import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import CreatePostPage from "./Pages/CreatePostPage";
import BlogPage from "./Pages/BlogPage";
import RootElement from "./Pages/RootElement";
import ContextProvider from "./store/ContextProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "login",
          element: <LoginPage />,
        },
        { path: "createpost", element: <CreatePostPage /> },
        { path: "blog/:blogId", element: <BlogPage /> },
      ],
    },
  ]);
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
