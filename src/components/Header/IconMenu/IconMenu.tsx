import inst from "../../../images/Instagram.svg";
import faceb from "../../../images/Facebook.svg";
import Location from "../../../images/location.svg"

type Props = {}
const IconMenu = (props: Props) => {
  return (
    <ul className="icon-menu">
    <li>
        <a href="https://instagram.com/iryna_nails_ca?igshid=YmMyMTA2M2Y=">
            {" "}
            <img src={inst} alt="Instagramm" />{" "}
        </a>
    </li>
    <li>
        <a href="https://www.facebook.com/profile.php?id=100087797776350&mibextid=LQQJ4d">
            {" "}
            <img src={faceb} alt="facebook" />{" "}
        </a>
    </li>
    <li>
        <a href="https://www.google.com/maps/d/edit?mid=1Hs4Fgd5oNqfnVKtgHyVsejYYnl69az4&usp=sharing"> <img src={Location} alt="Location" />{" "}</a>
    </li>
</ul>
  )
}
export default IconMenu