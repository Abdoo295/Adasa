import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Privacy from "./pages/footerPages/Privacy";
import Terms from "./pages/footerPages/Terms";
import Article from "./pages/Article";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/blog", element: <Navigate to="/blog/الكل" replace /> },
        { path: "/blog/الكل", element: <Blog /> },
        { path: "/blog/إضاءة", element: <Blog /> },
        { path: "/blog/بورتريه", element: <Blog /> },
        { path: "/blog/مناظر طبيعية", element: <Blog /> },
        { path: "/blog/تقنيات", element: <Blog /> },
        { path: "/blog/معدات", element: <Blog /> },
        { path: "/about", element: <About /> },
        { path: "/privacy", element: <Privacy /> },
        { path: "/terms", element: <Terms /> },
        { path: "blog/:slug", element: <Article /> },
      ],
    },
  ]);

  return (
    <div dir="rtl">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
