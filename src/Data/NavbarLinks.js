import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NoBackpackIcon from '@mui/icons-material/NoBackpack';
import PaidIcon from '@mui/icons-material/Paid';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FeedIcon from '@mui/icons-material/Feed';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const NavbarLinks = [
    {
        title: "Bo'limlar",
        pages: [
            {
                icon: <ProductionQuantityLimitsIcon />,
                text: "Mahsulot kirimi",
                path: "/",
            },
            {
                icon: <ShoppingBagIcon />,
                text: "Savdo Bo'limi",
                dropdown:[
                    {
                        text: "Sotuv Bo'limi",
                        path: "/sotuv-bolimi",
                    }, 
                    {
                        text: "Agent Buyurtma",
                        path: "/agent-buyurtma",
                    }, 
                    {
                        text: "Mijoz Buyurtma",
                        path: "/mijoz-buyurtma",
                    }, 
                ]
            },
            {
                icon: <NoBackpackIcon />,
                text: "Qaytarilganlar",
                dropdown:[
                    {
                        text: "Mijoz qaytariq",
                        path: "/mijoz-qaytariq",
                    }, 
                    {
                        text: "Yuk qaytariq",
                        path: "/yuk-qaytariq",
                    }, 
                ]
            },
            {
                icon: <PaidIcon />,
                text: "To'lovlar",
                dropdown:[
                    {
                        text: "Mijoz to'lov",
                        path: "/mijoz-tolov",
                    }, 
                    {
                        text: "Agent to'lov",
                        path: "/agent-tolov",
                    }, 
                    {
                        text: "Yuk to'lov",
                        path: "/yuk-tolov",
                    }, 
                ]
            },
            {
                icon: <ReceiptIcon />,
                text: "Xarajatlar",
                dropdown:[
                    {
                        text: "Xarajat turlari",
                        path: "/xarajat-turlari",
                    }, 
                    {
                        text: "Xarajat to'lov",
                        path: "/xarajat-tolov",
                    }, 
                ]
            },
            {
                icon: <ManageAccountsIcon />,
                text: "Xizmatlar",
                path: "/xizmatlar",
            },
            {
                icon: <FeedIcon />,
                text: "Hisobot",
                path: "/hisobot",
            },
        ]
    },
]