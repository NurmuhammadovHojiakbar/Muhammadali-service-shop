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
        color: "#1976d2",
        marginBottom: "30px",
    }

    const buttonContainer = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginLeft: "-25px",
        marginBottom: "-25px",
    }
    
    const buttonStyles = {
        marginLeft: "25px",
        marginBottom: "25px",
        maxWidth: "330px",
        width: "100%",
        justifyContent: "flex-start",
    }

    return (
        <Box container="div" sx={style}>
            <Typography variant="h4"component="h1" sx={captionStyles}>{title}</Typography>
            <Box container="div" sx={buttonContainer}>
                {
                    list?.map(item=>(
                        <Button
                            sx={buttonStyles}
                            variant="contained" 
                            startIcon={item.icon}   
                            onClick={()=>navigate(item.path)} 
                        >{item.text}</Button>
                    ))
                }
            </Box>
        </Box>
    );
}
 
export default Mundarija;