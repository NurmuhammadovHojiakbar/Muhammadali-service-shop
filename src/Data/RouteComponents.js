import Hisobot from "../Pages/Hisobot/Hisobot";
import MahsulotKirimi from "../Pages/MahsulotKirimi/MahsulotKirimi";
import MijozQaytariq from "../Pages/Qaytarilganlar/MijozQaytariq";
import YukQaytariq from "../Pages/Qaytarilganlar/YukQaytariq";
import AgentBuyurtma from "../Pages/SavdoBolimi/AgentBuyurtma";
import MijozBuyurtma from "../Pages/SavdoBolimi/MijozBuyurtma";
import SotuvBolimi from "../Pages/SavdoBolimi/SotuvBolimi";
import AgentTolov from "../Pages/Tolovlar/AgentTolov";
import MijozTolov from "../Pages/Tolovlar/MijozTolov";
import YukTolov from "../Pages/Tolovlar/YukTolov";
import XarajatTolov from "../Pages/Xarajatlar/XarajatTolov";
import XarajatTurlari from "../Pages/Xarajatlar/XarajatTurlari";
import Xizmatlar from "../Pages/Xizmatlar/Xizmatlar";

export const RouteComponents = [
    {
        element: <MahsulotKirimi /> ,
        path: "/"
    },
    {
        element: <SotuvBolimi /> ,
        path: "/sotuv-bolimi"
    },
    {
        element: <AgentBuyurtma /> ,
        path: "/agent-buyurtma"
    },
    {
        element: <MijozBuyurtma /> ,
        path: "/mijoz-buyurtma"
    },
    {
        element: <MijozQaytariq /> ,
        path: "/mijoz-qaytariq"
    },
    {
        element: <YukQaytariq /> ,
        path: "/yuk-qaytariq"
    },
    {
        element: <MijozTolov /> ,
        path: "/mijoz-tolov"
    },
    {
        element: <AgentTolov /> ,
        path: "/agent-tolov"
    },
    {
        element: <YukTolov /> ,
        path: "/yuk-tolov"
    },
    {
        element: <XarajatTurlari /> ,
        path: "/xarajat-turlari"
    },
    {
        element: <XarajatTolov /> ,
        path: "/xarajat-tolov"
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