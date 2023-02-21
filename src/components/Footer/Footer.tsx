import IconMenu from "../Header/IconMenu/IconMenu";
import { Button } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import "./Footer.scss";
import Logo from "../Logo/Logo";

type Props = {};
const Footer = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <div className="footer-conteiner">
                <IconMenu />
                <Logo />
                <Button>Up</Button>
            </div>
        </StyledEngineProvider>
    );
};
export default Footer;
