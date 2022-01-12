import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"

const Humburger = ({setIsOpen}) => {
    return (
        <IconButton
            onClick={()=>setIsOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2,display:{
                xs:"block",
                md:"none"
            }}}
          >
            <MenuIcon />
        </IconButton>
    );
}
 
export default Humburger;