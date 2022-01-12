import { SwipeableDrawer } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const DrawerContainer = ({isOpen,setIsOpen}) => {
    return (
        <SwipeableDrawer
            anchor="left"
            open={isOpen}
            onClose={()=>setIsOpen(false)}
            onOpen={()=>setIsOpen(true)}
        >
            <Navbar />
        </SwipeableDrawer>
    );
}
 
export default DrawerContainer;