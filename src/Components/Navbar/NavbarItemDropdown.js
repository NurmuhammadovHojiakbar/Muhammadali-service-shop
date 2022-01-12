import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarItemDropdown = ({item}) => {

    const [open,setOpen] = useState(false)
    const navigate = useNavigate()

    const handleClick = ()=>{
        setOpen(!open)
    }

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon sx={{color:"rgba(238, 238, 238, 0.5)", minWidth:"40px"}}>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        item.dropdown.map(page=>(
                            <ListItemButton 
                                sx={{ pl: 9 }}
                                onClick={()=>navigate(page.path)}
                            >
                                <ListItemText primary={page.text} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </>
    );
}
 
export default NavbarItemDropdown;