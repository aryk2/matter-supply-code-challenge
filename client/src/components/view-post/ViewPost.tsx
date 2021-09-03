import React from 'react'
import { useViewPost } from '../../hooks/useViewPost'
import { useLocation } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import { formatDate } from '../../util/dateFormat'
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
        margin: 20
    },
    body: {
        marginTop: 20
    },
    bodyText: {
        whiteSpace: "pre-wrap"
    },
  }),
);

export const ViewPost = () => {
    const location = useLocation()
    const classes = useStyles()

    const { post } = useViewPost(((location as any)?.state as any)?.id)

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            className={classes.container}
        >
            <Grid item>
                <Typography variant="caption">{post?.date ? formatDate(post?.date) : ''}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h3">{post?.title}</Typography>
            </Grid>
            <Grid item className={classes.body}>
                <Typography variant="body1" className={classes.bodyText}>{post?.body}</Typography>
            </Grid>

        </Grid>
    )
}