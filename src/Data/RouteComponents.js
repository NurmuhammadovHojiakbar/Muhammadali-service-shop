import Hisobot from "../Pages/Hisobot/Hisobot";
import Xizmatlar from "../Pages/Xizmatlar/Xizmatlar";

export const RouteComponents = [
    {
        element: "Hello" ,
        path: "/"
    },
    {
        element: <Hisobot /> ,
        path: "/hisobot"
    },
    {
        element: <Xizmatlar /> ,
        path: "/xizmatlar"
    },
]