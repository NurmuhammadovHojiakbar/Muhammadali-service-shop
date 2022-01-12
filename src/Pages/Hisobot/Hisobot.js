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

const Hisobot = () => {

    const RouteList = [
        {
            icon: <AutoAwesomeMotionIcon />,
            text: "Mahsulot qoldig'i",
            path: "/hisobot/mahsulot-qoldigi"
        },
        {
            icon: <LocalShippingIcon />,
            text: "Mahsulot aylanmasi",
            path: "/hisobot/mahsulot-aylanmasi"
        },
        {
            icon: <ApartmentIcon />,
            text: "Reestr mahsulot",
            path: "/hisobot/reestr-mahsulot"
        },
        {
            icon: <EngineeringIcon />,
            text: "Mijoz akt sverka",
            path: "/hisobot/mijoz-akt-sverka"
        },
        {
            icon: <StarsIcon />,
            text: "Mijozlar qoldig'i",
            path: "/hisobot/mijozlar-qoldigi"
        },
        {
            icon: <HomeWorkIcon />,
            text: "Reestr mijoz",
            path: "/hisobot/reestr-mijoz"
        },
        {
            icon: <BalanceIcon />,
            text: "Yuk beruvchi akt sverka",
            path: "/hisobot/yuk-beruvchi-akt-sverka"
        },
        {
            icon: <FitbitIcon />,
            text: "Yuk beruvchilar qoldig'i",
            path: "/hisobot/yuk-beruvchilar-qoldigi"
        },
        {
            icon: <AddLocationAltIcon />,
            text: "Reestr yuk beruvchi",
            path: "/hisobot/reestr-yuk-beruvchi"
        },
        {
            icon: <QrCode2Icon />,
            text: "Kassa hisobi",
            path: "/hisobot/kassa-hisobi"
        },
        {
            icon: <HailIcon />,
            text: "DT.KT kontragentov",
            path: "/hisobot/dtkt-kontragentov"
        },
        {
            icon: <ScatterPlotIcon />,
            text: "MAxsulot foyda hisobi",
            path: "/hisobot/mahsulot-foyda-hisobi"
        },
        {
            icon: <QrCodeScannerIcon />,
            text: "Foto hisobot",
            path: "/hisobot/foto-hisobot"
        },
        {
            icon: <QrCodeScannerIcon />,
            text: "Foyda hisobi",
            path: "/hisobot/foyda-hisobi"
        },
    ]

    return (
        <Mundarija title="Hisobot" list={RouteList} />
    );
}
 
export default Hisobot;