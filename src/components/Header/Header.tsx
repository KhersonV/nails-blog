import "./Header.css";
import IconMenu from "./IconMenu/IconMenu";


type Props = {};
const Header = (props: Props) => {
    const lang = "engl";
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-1 lang">
                        <button className="btn">
                            <span>{lang}</span>
                        </button>
                    </div>

                    <IconMenu/>
                </div>
            </div>
        </div>
    );
};
export default Header;
