import { Grid } from "@material-ui/core";
import { Post } from "../../interfaces/Post.interface";
import { PostsListItem } from "../posts-list-item/PostsListItem";

export interface PostsListProps {
    posts: Post[]
    searchTerm: string
}

export const PostsList = (props: PostsListProps) => {

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            {props
                .posts
                // .filter(item => item.title.toLowerCase().includes(props.searchTerm.toLowerCase()))
                .map((post, index) => {
                    return (
                        <PostsListItem post={post} index={index}/>
                    )
                })}

        </Grid>
    )
}