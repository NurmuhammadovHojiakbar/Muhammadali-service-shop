import { AppBar, Box, Toolbar } from "@mui/material";
import { useState } from "react";
import ButtonIcons from "./ButtonIcons";
import DrawerContainer from "./DrawerContainer";
import Humburger from "./Humburger";
import SearchForm from "./SearchForm";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toolbarStyles = {flexWrap:{xs: "wrap", sm:"nowrap"}}

    return (
        <Box component="div">
            <AppBar position="static">
                <Toolbar sx={toolbarStyles}>
                    <Humburger setIsOpen={setIsOpen} />
                    <SearchForm />
                    <ButtonIcons />
                </Toolbar>
            </AppBar>
            <DrawerContainer isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>
    );
}
 
export default Header;