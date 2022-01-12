import { Box } from "@mui/material";
import NavbarList from "./NavbarList";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {

    const styles = {
        bgcolor: 'rgb(35, 48, 68)', 
        color: 'primary.contrastText',
        height: "100vh",
        minWidth: "260px"
    }

    return (
        <Box sx={styles}>
            <NavbarLogo />
            <NavbarList />
        </Box>
    );
}
 
export default Navbar;