import MailIcon from "@mui/icons-material/Mail"
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ButtonIconsList = [
    {
        buttonIcon: <MailIcon />,
        badge: 4,
        label: "show 4 new mails"
    },
    {
        buttonIcon: <NotificationsIcon />,
        badge: 10,
        label:"show 10 new notification",
    },
    {
        buttonIcon: <AccountCircleIcon />,
        label: "acoount"
    },
]