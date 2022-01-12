import { Box, List, ListSubheader } from "@mui/material";
import { NavbarLinks } from "../../Data/NavbarLinks";
import NavbarItem from "./NavbarItem";
import NavbarItemDropdown from "./NavbarItemDropdown";

const NavbarList = () => {

    const styles = {
        py: 2,
        px: 3,
        overflow:"auto",
        height: "calc(100vh - 74px)",
        "&::-webkit-scrollbar": {
            width: "5px"
        },           
        "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
        },           
        "&::-webkit-scrollbar-thumb": {
            bgcolor: "darkgrey",
            outline: "1px solid slategrey"
          }
    }

    return (
        <Box
            component="div"
            sx={styles}
        >
            {
                NavbarLinks.map(list =>(
                    <List
                        component="div"
                        subheader={
                            <ListSubheader 
                                component="div"
                                sx={{color:"rgba(238, 238, 238, 0.5)", bgcolor: "transparent", position:"relative"}}    
                            >
                                {list.title}
                            </ListSubheader>
                        }
                    >
                        {
                            list.pages.map(page=>{
                                return page.dropdown? 
                                    <NavbarItemDropdown item={page} /> 
                                        : 
                                    <NavbarItem item={page} />
                            })
                        }
                    </List>
                ))
            }
        </Box>
    );
}
 
export default NavbarList;