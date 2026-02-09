import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../component/Home";
import About from "../component/About";
import Blog from "../component/Blog";

const router = createBrowserRouter ([
    {
        path: "/",
        Component: Layout,
        children: [
           {
            index: true,
            Component: Home
           },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/blog',
                Component: Blog
            },
        ]

    }
]);

export default router;