import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Mundarija = ({title, list}) => {

    const navigate = useNavigate()
    
    const style = {
        height: {
            xs: "calc(100vh - 111px)",
            sm: "calc(100vh - 64px)"
        },
        overflow: "auto",
        p: 3,
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

    const captionStyles = {
        textAlign: "center",
        fontWeight: 600,
        color: "#5584AC",
        marginBottom: "16px",
    }

    const buttonContainer = {
        dislay: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    }

    return (
        <Box container="div" sx={style}>
            <Typography variant="h4"component="h1" sx={captionStyles}>{title}</Typography>
            <Box container="div" sx={buttonContainer}>
                {
                    list?.map(item=>(
                        <Button 
                            variant="container" 
                            color="primary"
                            startIcon={item.icon}   
                            onClick={()=>navigate(`/hisobot${item.path}`)} 
                        >{item.text}</Button>
                    ))
                }
            </Box>
        </Box>
    );
}
 
export default Mundarija;