import Blog from "../../pages/Blog/Blog";
import MyWorks from "../../pages/MyWorks/MyWorks";
import { Routes, Route } from "react-router";
import About from "../../pages/About/About";
import Favorites from "../../pages/Favorites/Favorites";

type Props = {
  
};

const Main = (props: Props) => {

    return (
        <>
            <Routes>
                <Route path="/" element={<MyWorks />}>
                    {" "}
                </Route>
                <Route path="/blog" element={<Blog />}>
                    {" "}
                </Route>
                <Route path="/about" element={<About />}>
                    {" "}
                </Route>
                <Route path="/favorites" element={<Favorites  />}>
                    {" "}
                </Route>
            </Routes>
        </>
    );
};
export default Main;
