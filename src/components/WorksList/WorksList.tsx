import nailsArray from "../../utils/nailsArray";
import { Grid, Typography } from "@mui/material";
import WorksListItem from "./WorksListItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import image_3 from "../../images/nails/3.jpg";
import image_4 from "../../images/nails/4.jpg";
import image_8 from "../../images/nails/8.jpg";
import image_12 from "../../images/nails/12.jpg";

type NailsProps = {
    title: string;
    description: string;
    picture: string;
    id: number;
};

type Props = {
    
};
const WorksList = (props: Props) => {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img className="slide" src={image_3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide" src={image_4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide" src={image_8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slide" src={image_12} alt="" />
                </SwiperSlide>
            </Swiper>
            <Typography variant="h3" align="center" component="h2">
                My works
            </Typography>

            <Grid container spacing={3}>
                {nailsArray.map(
                    ({ title, description, picture, id }: NailsProps) => (
                        <Grid key={id} item xs={12} sm={6} md={4}>
                            {" "}
                            <WorksListItem
                               
                                title={title}
                                description={description}
                                picture={picture}
                                id={id}
                            />
                        </Grid>
                    ),
                )}
            </Grid>
        </>
    );
};
export default WorksList;
