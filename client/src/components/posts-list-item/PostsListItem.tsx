import { Grid, Divider, Box, Typography } from "@material-ui/core";
import { Post } from "../../interfaces/Post.interface";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../util/dateFormat";
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    gridItem: {
        width: '100%',
        "&:hover": {
            "background-color": "#e8e8e8",
            cursor: "pointer",
          },
    },
    margin: {
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    divider: {
        width: '100%',
    },
    text: {
        marginBottom: 10
    }
  }),
);

export interface PostsListItemProps {
    post: Post
    index: number
}

export const PostsListItem = (props: PostsListItemProps) => {
    const classes = useStyles()
    const history = useHistory()

    const handleItemClick = () => {
        history.push({
            pathname: String('/view/'+props?.post?.id??''),
            state: {
                id: props.post.id
            }
        });
    }

    return (
        <Grid 
            item 
            className={classes.gridItem} 
            key={String(props.index)}
            onClick={() => handleItemClick()}
        >
            <Box className={classes.margin}>
                <Typography variant="caption">{props.post.date ? formatDate(props.post.date) : ''}</Typography>
                <Typography variant="h6" className={classes.text}>{props.post.title}</Typography>
                <Divider className={classes.divider}/>
            </Box>
        </Grid>
    )
}