import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import IconMenu from "./IconMenu/IconMenu";
import MainMenu from "./MainMenu/MainMenu";
import { StyledEngineProvider } from "@mui/material/styles";
import { Button} from '@mui/material'
import "./Header.scss";

export default function MenuAppBar() {
    return (
        <StyledEngineProvider injectFirst>
            <div>
                <AppBar position="static" className="appCont">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className=" container ">
                            <IconMenu />
                            <MainMenu />
                        </div>
                        <Button  className="menu-btn-favorites" variant="text">Favorites</Button>


                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        ></Typography>
                        
                    </Toolbar>
                </AppBar>
            </div>
        </StyledEngineProvider>
    );
}
