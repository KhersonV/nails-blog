import inst from "../../../images/Instagram.svg";
import faceb from "../../../images/Facebook.svg";
import Location from "../../../images/location.svg";
import phone from "../../../images/WhatsApp.svg";
import "./IconMenu.scss";

type Props = {};
const IconMenu = (props: Props) => {
    return (
        <ul className="icon-menu ">
            <li className="icons">
                <a href="https://instagram.com/iryna_nails_ca?igshid=YmMyMTA2M2Y=">
                    {" "}
                    <img
                        className="iconMenu-img"
                        src={inst}
                        alt="Instagramm"
                    />{" "}
                </a>
            </li>
            <li className="icons">
                <a href="https://www.facebook.com/profile.php?id=100087797776350&mibextid=LQQJ4d">
                    {" "}
                    <img
                        className="iconMenu-img"
                        src={faceb}
                        alt="facebook"
                    />{" "}
                </a>
            </li>
            <li className="icons">
                <a href="https://www.google.com/maps/d/edit?mid=1Hs4Fgd5oNqfnVKtgHyVsejYYnl69az4&usp=sharing">
                    {" "}
                    <img
                        className="iconMenu-img"
                        src={Location}
                        alt="Location"
                    />{" "}
                </a>
            </li>
            <li className="icons show-numb">
                <img className="iconMenu-img" src={phone} alt="img-phone" />
                <span className="hiden-numb">+13064604493</span>
            </li>
        </ul>
    );
};
export default IconMenu;
