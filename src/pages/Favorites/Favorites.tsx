import nailsArray from "../../utils/nailsArray";
import { Grid } from "@mui/material";
import WorksListItem from "../../components/WorksList/WorksListItem";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

type NailsProps = {
    title: string;
    description: string;
    picture: string;
    id: number;
};

const Favorites = (props: Props) => {
    const productsLikeState = useAppSelector(
        (state) => state.productsLikeState,
    );

    // Отфильтрованный массив товаров, которые были лайкнуты
    const likedNails = nailsArray.filter(
        ({ id }: NailsProps) => productsLikeState[id],
    );

    return (
        <Grid container spacing={3}>
            {likedNails.map(
                ({ title, description, picture, id }: NailsProps) => (
                    <Grid key={id} item xs={12} sm={6} md={4}>
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
    );
};

export default Favorites;
