import { Badge, Box, IconButton } from "@mui/material"
import { ButtonIconsList } from "../../Data/ButtonIcons";

const ButtonIcons = () => {
    return (
        <Box component="div" sx={{ display: "flex", marginLeft:"auto" }}>
            {
                ButtonIconsList.map(i=>(
                    <IconButton size="large" aria-label={i.label} color="inherit">
                        {
                            i.badge? 
                            <Badge badgeContent={i.badge} color="error">
                                {i.buttonIcon}
                            </Badge>
                            :
                            i.buttonIcon
                        }
                    </IconButton>
                ))
            }
          </Box>
    );
}
 
export default ButtonIcons;