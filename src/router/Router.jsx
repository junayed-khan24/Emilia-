import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../component/Home";
import About from "../component/About";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Portfolio from "../component/Portfolio";
import Wedding from "../component/Wedding";
import Portrait from "../component/Portrait";
import Nature from "../component/Nature";
import BookingForm from "../component/BookingForm";

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
                Component: Portfolio,
            },
            {
                path: '/blog',
                Component: Blog
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/booking',
                Component: BookingForm
            },
            {
                path: '/wedding',
                Component: Wedding
            },
            {
                path: '/portrait',
                Component: Portrait
            },
            {
                path: '/nature',
                Component: Nature
            }
        ]

    }
]);

export default router;