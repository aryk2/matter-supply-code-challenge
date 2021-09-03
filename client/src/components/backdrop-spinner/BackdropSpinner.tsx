import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

/* eslint-disable-next-line */
export interface BackdropSpinnerProps {
  open: boolean
}

export const BackdropSpinner = (props: BackdropSpinnerProps) => {
  const classes = useStyles();
  const {
    open
  } = props

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default BackdropSpinner
