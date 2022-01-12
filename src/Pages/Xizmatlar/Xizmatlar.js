import Mundarija from "../../Components/Mundarija/Mundarija"
import StarsIcon from '@mui/icons-material/Stars';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import BalanceIcon from '@mui/icons-material/Balance';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FitbitIcon from '@mui/icons-material/Fitbit';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import HailIcon from '@mui/icons-material/Hail';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const Xizmatlar = () => {

    const RouteList = [
        {
            icon: <LocalShippingIcon />,
            text: "Yuk beruvchi",
            path: "/xizmatlar/yuk-beruvchi"
        },
        {
            icon: <ApartmentIcon />,
            text: "Viloyat",
            path: "/xizmatlar/viloyat"
        },
        {
            icon: <EngineeringIcon />,
            text: "Xodimlar",
            path: "/xizmatlar/xodimlar"
        },
        {
            icon: <StarsIcon />,
            text: "Brendlar",
            path: "/xizmatlar/brendlar"
        },
        {
            icon: <HomeWorkIcon />,
            text: "Shahar / Tuman",
            path: "/xizmatlar/shahar"
        },
        {
            icon: <AutoAwesomeMotionIcon />,
            text: "Mahsulot qoldig'i",
            path: "/xizmatlar/mahsulot-qoldigi"
        },
        {
            icon: <BalanceIcon />,
            text: "O'lchov birligi",
            path: "/xizmatlar/olchov-birligi"
        },
        {
            icon: <AddLocationAltIcon />,
            text: "region",
            path: "/xizmatlar/region"
        },
        {
            icon: <FitbitIcon />,
            text: "Yuk beruvchilar qoldig'i",
            path: "/xizmatlar/yuk-beruvchilar-qoldigi"
        },
        {
            icon: <QrCode2Icon />,
            text: "Mahsulot bo'limlar",
            path: "/xizmatlar/mahsulot-bolimlari"
        },
        {
            icon: <HailIcon />,
            text: "Mijozlar",
            path: "/xizmatlar/mijozlar"
        },
        {
            icon: <ScatterPlotIcon />,
            text: "Mijozlar qoldig'i",
            path: "/xizmatlar/mijozlar-qoldigi"
        },
        {
            icon: <QrCodeScannerIcon />,
            text: "Mahsulotlar",
            path: "/xizmatlar/mahsulotlar"
        },
    ]

    return (
        <Mundarija title="Xizmatlar" list={RouteList} />
    );
}
 
export default Xizmatlar;