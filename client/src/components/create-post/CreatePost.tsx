import { Grid, TextField, Button, Typography, useMediaQuery } from '@material-ui/core'
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useCreatePost } from '../../hooks/useCreatePost';
import { Post } from '../../interfaces/Post.interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createPostGrid: {
        width: '100%',
        padding: theme.spacing(1,4)
    },
    gridItem: {
        padding: theme.spacing(1,0,0,0)
    },
    discardButton: {
        margin: theme.spacing(0,1)
    },
    title: {
        fontWeight: 300
    }
  }),
);

export const CreatePost = () => {
    const classes = useStyles()
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    const {
        newPostState,
        newPostErrors,
        handleChange,
        handleSubmit,
        handleDiscard
    } = useCreatePost()

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.createPostGrid}
        >
            <Grid item className={classes.gridItem} style={{width: mobile ? '100%' : '70%'}}>
                <Typography variant={'h3'} className={classes.title}> New post.</Typography>
            </Grid>
            <Grid item className={classes.gridItem} style={{width: mobile ? '100%' : '70%'}}>
                <TextField 
                    variant={'outlined'}
                    name={'title'}
                    defaultValue={newPostState.title}
                    onBlur={(event) => handleChange(event.target.name as keyof Post, event.target.value)}
                    fullWidth
                    label={'Title'}
                    error={!!newPostErrors.title}
                    helperText={!!newPostErrors.title && newPostErrors.title}
                />
            </Grid>
            <Grid item className={classes.gridItem} style={{width: mobile ? '100%' : '70%'}}>
                <TextField 
                    name={'body'}
                    variant={'outlined'}
                    defaultValue={newPostState.body}
                    onBlur={(event) => handleChange(event.target.name as keyof Post, event.target.value)}
                    fullWidth
                    label={'Text'}
                    multiline
                    rows={4}
                    error={!!newPostErrors.body}
                    helperText={!!newPostErrors.body && newPostErrors.body}
                />
            </Grid>
            <Grid item className={classes.gridItem} style={{width: mobile ? '100%' : '70%'}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Button variant={'outlined'} className={classes.discardButton} onClick={() => handleDiscard()}>Discard</Button>
                    <Button variant={'outlined'} onClick={() => handleSubmit()}>Submit</Button>
                </Grid>
                
            </Grid>
        </Grid>
    )
}