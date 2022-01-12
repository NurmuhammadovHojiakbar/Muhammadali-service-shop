import { Box, Typography } from "@mui/material";

const InfoLayout = ({title,children}) => {

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

    return (
        <Box container="div" sx={style}>
            <Typography variant="h4"component="h1" sx={captionStyles}>{title}</Typography>
            {children}
        </Box>
    );
}
 
export default InfoLayout;