import { Grid, Typography } from "@mui/material";
import ExtendedWorkListItem from "../../components/WorksList/ExtendedWorkListItem";
import nailsArray from "../../utils/nailsArray";

type Props = {};

const ArticlePage = (props: Props) => {
    // new URLSearchParams(window.location.search) создает новый объект URLSearchParams из текущего URL-адреса, которая начинается со знака вопроса. Затем, метод .get("id") извлекает значение параметра id из объекта URLSearchParams

    const articleId = new URLSearchParams(window.location.search).get("id");

    const article = nailsArray.find((x) => x.id.toString() === articleId);

    return (
        <>
            <Typography variant="h3" align="center" component="h2">
                Article
            </Typography>

            {article && (
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <ExtendedWorkListItem
                            article={article.article}
                            title={article.title}
                            description={article.description}
                            picture={article.picture}
                            id={article.id}
                        />
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default ArticlePage;
