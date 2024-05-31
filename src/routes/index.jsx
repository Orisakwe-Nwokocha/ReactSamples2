import Layout from "../components/Layout";
import Home from "../pages/Home";
import Footer from "../components/Footer";

export const ROUTES = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "home",
                element: <Home/>
            }
        ]
    }
]