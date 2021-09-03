import { Grid, IconButton} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppMenu } from '../app-menu/AppMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBoxGrid: {
        width: '100%',
        borderBottom: '1px solid #c7c8c9',
    },
    accountIcon: {
        color: '#2e2e2e'
    },
    searchBox: {
        width: '100%'
    },
    searchButton: {
        height: 40
    }
  }),
);

export const AppBar = (props: {children: React.ReactNode}) => {
    const classes = useStyles()

    return (
        <Grid 
            container 
            className={classes.searchBoxGrid} 
            style={{ height: 50}}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item xs={6}>
                <Grid 
                    container 
                    justifyContent="flex-start"
                    alignItems="flex-start" 
                    style={{height: 40, marginBottom: 10, marginLeft: 15}}
                >
                    <AppMenu />
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid 
                    container 
                    justifyContent="flex-end"
                    alignItems="flex-start" 
                    style={{height: 50}}
                >
                    <IconButton aria-label="delete">
                        <AccountCircleIcon style={{fontSize: 26}} className={classes.accountIcon}/>
                    </IconButton>
                </Grid>
            </Grid>
            {props.children}
        </Grid>

    )
}