import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {};
const MainMenu = (props: Props) => {
    return (
        <div className="conteiner-btn-menu">
            <Button className="menu-btn" color="inherit">
                <Link className="menu-link" to={"/"}>
                    {" "}
                    My Works
                </Link>
            </Button>
            <Button className="menu-btn" color="inherit">
                <Link className="menu-link" to={"/blog"}>
                    {" "}
                    Blog
                </Link>
            </Button>
            <Button className="menu-btn" color="inherit">
                <Link className="menu-link" to={"/about"}>
                    {" "}
                    About
                </Link>
            </Button>
        </div>
    );
};
export default MainMenu;
