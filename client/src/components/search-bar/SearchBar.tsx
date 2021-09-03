import { TextField, Grid, Button, InputAdornment, IconButton, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, { ChangeEvent } from 'react';
import { AppMenu } from '../app-menu/AppMenu';

const useStyles = makeStyles(() =>
  createStyles({
    searchBoxGrid: {
        width: '100%',
        transition: 'height 0.5s ease-out',
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
    },
    title: {
        fontWeight: 300
    }
  }),
);

export interface SearchBarProps {
    children: React.ReactNode
    searchTerm: string
    searchBoxExpanded: boolean
    handleChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    handleSubmit: () => void
}

export const SearchBar = (props: SearchBarProps) => {
    const classes = useStyles()
    const windowDimensions = useWindowDimensions()

    const {
        searchTerm,
        searchBoxExpanded,
        handleChange,
        handleSubmit
    } = props

    return (
        <Grid 
            container 
            className={classes.searchBoxGrid} 
            style={{ height: searchBoxExpanded ? windowDimensions.height : 50}}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Grid item xs={2} sm={1}>
                <Grid 
                    container 
                    justifyContent="flex-start"
                    alignItems="flex-start" 
                    style={{height: searchBoxExpanded ? windowDimensions.height : 40, marginBottom: 10, marginLeft: 15}}
                >
                    <AppMenu />
                </Grid>
                </Grid>
                <Grid item xs={8} sm={10}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        {searchBoxExpanded && 
                            <Grid item style={{height: windowDimensions.height / 2}} >
                                <Grid 
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{paddingTop: windowDimensions.height / 4}}
                                >
                                    <Typography className={classes.title} variant={'h3'}>Blog msco.</Typography>
                                    <Typography className={classes.title} variant={'body1'}>Search for a Github username</Typography>
                                </Grid>
                            </Grid>
                        }   
                        <Grid item style={{height: searchBoxExpanded ? windowDimensions.height / 2 : 40, width: '100%'}}>
                            <Grid 
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                style={{height: searchBoxExpanded ? 150 : 40}}
                            >
                                <Grid item xs={8} sm={6} md={4} lg={3} style={{paddingRight: 2}}>
                                    <TextField 
                                        variant={'outlined'}
                                        size={'small'}
                                        value={searchTerm}
                                        onChange={handleChange}
                                        className={classes.searchBox}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            <Grid item xs={4} sm={3} md={2} lg={1}>
                                <Grid 
                                    container 
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Button className={classes.searchButton} variant={'outlined'} onClick={() => handleSubmit()}> Search </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} sm={1}>
                <Grid 
                    container 
                    justifyContent="flex-end"
                    alignItems="flex-start" 
                    style={{height: searchBoxExpanded ? windowDimensions.height : 50}}
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