import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import IconMenu from "./IconMenu/IconMenu";
import MainMenu from "./MainMenu/MainMenu";
import { StyledEngineProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import nailsArray, { NailsProps } from "../../utils/nailsArray";

export default function MenuAppBar() {
    const productsLikeState = useAppSelector(
        (state) => state.productsLikeState,
    );

    const likedNails = nailsArray.filter(
        ({ id }: NailsProps) => productsLikeState[id],
    );
    const favoritesCount = likedNails.length;

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

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <>
                                <Button
                                    className="menu-btn-favorites"
                                    variant="text"
                                >
                                    <Link
                                        className="menu-link"
                                        to={"/favorites"}
                                    >
                                        Favorites {favoritesCount}
                                    </Link>
                                </Button>
                                <Button
                                    className="menu-btn-favorites"
                                    variant="text"
                                >
                                    <Link className="category" to={"/category"}>
                                        Category
                                    </Link>
                                </Button>
                            </>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </StyledEngineProvider>
    );
}
