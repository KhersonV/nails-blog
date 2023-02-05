type Props = {};
const MainMenu = (props: Props) => {
    return (
        <ul className="main-menu-ul">
            <li className="main-menu-li">
                {" "}
                <a href="#">Blog</a>{" "}
            </li>
            <li className="main-menu-li">
                {" "}
                <a href="#">My Works</a>{" "}
            </li>
            <li className="main-menu-li">
                {" "}
                <a href="#">About Me</a>{" "}
            </li>
        </ul>
    );
};
export default MainMenu;
