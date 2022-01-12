import Mundarija from "../../Components/Mundarija/Mundarija"
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import FitbitIcon from '@mui/icons-material/Fitbit';
import CachedIcon from '@mui/icons-material/Cached';
import ArticleIcon from '@mui/icons-material/Article';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StorageIcon from '@mui/icons-material/Storage';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddCardIcon from '@mui/icons-material/AddCard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const Hisobot = () => {

    const RouteList = [
        {
            icon: <AutoAwesomeMotionIcon />,
            text: "Mahsulot qoldig'i",
            path: "/hisobot/mahsulot-qoldigi"
        },
        {
            icon: <CachedIcon />,
            text: "Mahsulot aylanmasi",
            path: "/hisobot/mahsulot-aylanmasi"
        },
        {
            icon: <ArticleIcon />,
            text: "Reestr mahsulot",
            path: "/hisobot/reestr-mahsulot"
        },
        {
            icon: <SupervisedUserCircleIcon />,
            text: "Mijoz akt sverka",
            path: "/hisobot/mijoz-akt-sverka"
        },
        {
            icon: <BlurOnIcon />,
            text: "Mijozlar qoldig'i",
            path: "/hisobot/mijozlar-qoldigi"
        },
        {
            icon: <AssignmentIcon />,
            text: "Reestr mijoz",
            path: "/hisobot/reestr-mijoz"
        },
        {
            icon: <StorageIcon />,
            text: "Yuk beruvchi akt sverka",
            path: "/hisobot/yuk-beruvchi-akt-sverka"
        },
        {
            icon: <FitbitIcon />,
            text: "Yuk beruvchilar qoldig'i",
            path: "/hisobot/yuk-beruvchilar-qoldigi"
        },
        {
            icon: <PostAddIcon />,
            text: "Reestr yuk beruvchi",
            path: "/hisobot/reestr-yuk-beruvchi"
        },
        {
            icon: <AddCardIcon />,
            text: "Kassa hisobi",
            path: "/hisobot/kassa-hisobi"
        },
        {
            icon: <AppRegistrationIcon />,
            text: "DT.KT kontragentov",
            path: "/hisobot/dtkt-kontragentov"
        },
        {
            icon: <LocalAtmIcon />,
            text: "Maxsulot foyda hisobi",
            path: "/hisobot/mahsulot-foyda-hisobi"
        },
        {
            icon: <PhotoLibraryIcon />,
            text: "Foto hisobot",
            path: "/hisobot/foto-hisobot"
        },
        {
            icon: <AutoGraphIcon />,
            text: "Foyda hisobi",
            path: "/hisobot/foyda-hisobi"
        },
    ]

    return (
        <Mundarija title="Hisobot" list={RouteList} />
    );
}
 
export default Hisobot;