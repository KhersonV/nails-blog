import { Grid, Typography } from "@mui/material";
import articlesArray from "../../utils/articlesArray";
import ArticlesListItem from "./ArticlesListItem";

type ArticlesProps = {
    title: string;
    description: string;
    picture: string;
    id: number;
};

type Props = {};
const Articles = (props: Props) => {
    return (
        <>
            <Typography variant="h3" align="center" component="h2">
                Articles
            </Typography>

            <Grid container spacing={3}>
                {articlesArray.map(
                    ({ title, description, picture, id }: ArticlesProps) => (
                        <Grid key={id} item xs={12} sm={6} md={4}>
                            {" "}
                            <ArticlesListItem
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
export default Articles;
