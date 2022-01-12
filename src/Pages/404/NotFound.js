import { Box, Alert, AlertTitle, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate()

    const alertStyles = {
        maxWidth: "350px",
        textAlign: "center"
    }

    return (
        <Box 
            componenet="div"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
                minHeight: "100vh"
            }}    
        >
            <Alert severity="error" sx={alertStyles}>
                <AlertTitle><strong>404 - Bunday sahifa topilmadi!!!</strong></AlertTitle>
                <Button 
                    size="small"  
                    variant="contained" 
                    color="error"
                    onClick={()=>navigate("/")}    
                >Bosh sahifaga qaytish</Button>                
            </Alert>
        </Box>
    );
}
 
export default NotFound;