import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../component/Home";
import About from "../component/About";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Portfolio from "../component/Portfolio";

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
                path: '/portfolio',
                Component: Portfolio
            },
            {
                path: '/blog',
                Component: Blog
            },
            {
                path: '/contact',
                Component: Contact
            }
        ]

    }
]);

export default router;