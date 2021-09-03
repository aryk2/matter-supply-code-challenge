import { IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import { pages } from '../../pages/pages'
import { useMenu } from '../../hooks/useMenu';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accountIcon: {
        color: '#2e2e2e'
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }
  }),
);

export const AppMenu = () => {
    const classes = useStyles()
    const theme = useTheme();

    const {
        menuOpen,
        handleDrawerOpen,
        handleDrawerClose,
        handleMenuClick
    } = useMenu()

    return (
        <>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                <MenuIcon fontSize="medium" className={classes.accountIcon}/>
            </IconButton >
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={menuOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <List>
                    {pages.filter(page => page.showInMenu).map((page) => {
                        const IconComponent = page.icon

                        return (
                            <ListItem 
                                button key={page.text} 
                                onClick={() => handleMenuClick(page.path)}
                            >
                                <ListItemIcon><IconComponent /></ListItemIcon>
                                <ListItemText primary={page.text} />
                            </ListItem>
                        )
                        }
                    )}
                </List>

            </Drawer>
        </>

    )
}