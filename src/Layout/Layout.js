import { Box } from "@mui/material";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";

const Layout = ({children}) => {

    const style = {
        display: "flex",
    }

    

    return (
        <Box 
            component="div"
            sx={style}    
        >
            
            <Box sx={{
                display: {
                    xs: "none",
                    md: "block"
                },}}
            >
                <Navbar />
            </Box>
            <Box sx={{flexGrow: 1}} >
                <Header />
                {children}
            </Box>
        </Box>
    );
}
 
export default Layout;