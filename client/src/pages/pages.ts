import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';

export const pages = [
    {
        showInMenu: false,
        text: 'Sign In',
        path: '/sign-in',
        icon: HomeIcon // never used anywhere.
    },
    {
        isPrivate: true,
        showInMenu: true,
        showInLanding: false,
        text: 'Home',
        path: '/',
        icon: HomeIcon
    },
    {
        isPrivate: true,
        showInMenu: true,
        showInLanding: false,
        text: 'Create Post',
        path: '/create-post',
        icon: CreateIcon
    },
]

export const homePage = '/'